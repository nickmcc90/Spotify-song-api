const express = require('express')
const { generateApiKey } = require('generate-api-key')
const app = express()

app.use(express.json())
app.use(require('cors')())
require('dotenv').config()
const Stripe = require("stripe")
const { db } = require('./firebase')

//Variables
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(STRIPE_SECRET_KEY)
const clientDOMAIN = 'http://localhost:5173'

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: '2020-08-27'
  })
  const res = await stripe.prices.list({
    expand: ['data.product']
  })
  const prices = res.data
  return prices
}

app.get('/api', (req, res) => {
  res.json({ "message": "Api connected."})
})

app.get('/check-status/:api_key', (req, res) => {
  const { api_key } = req.params
  console.log(api_key)

})

app.post('/checkout-session/:plan', async (req, res) => {
  //assign id, mode, line_items, and quantity_type (this is for the status of sub and pre calls)
  //generate api key
  //make customer
  //grab customer.id in a variable
  //create a checkout session with the id, metadata, line_items, mode, success and cancel urls

  const products = await getStripeProducts()

  const { plan } = req.params
  const { vibe } = req.query
  let price_ID, mode, line_items, quantity_type

  const soldItem = products.filter((item) => {
    return item.product.metadata.plan === plan && item.product.metadata.vibe === vibe
  })

  console.log("This is the sold item", soldItem)

  if(soldItem.length > 0) {
    price_ID = soldItem[0].id
    if(soldItem[0].type === 'recurring') {
      mode = 'subscription'
      line_items = [
        {
          price: price_ID,
        }
      ]
      quantity_type = 'subscription'
    } else if (soldItem[0].type === 'one_time') {
      mode = 'payment'
      line_items = [
        {
          price: price_ID,
          quantity: 1
        }
      ]
      quantity_type = 20
    }

  } else {
    return res.sendStatus(403)
  }

  let newAPIKey = generateApiKey()
  newAPIKey = newAPIKey.replaceAll("/", "")
  newAPIKey = newAPIKey.replaceAll("+", "")
  newAPIKey = newAPIKey.replaceAll(".", "")
  newAPIKey = newAPIKey.replaceAll("~", "")


  const customer = await stripe.customers.create({
    metadata: {
      APIkey: newAPIKey
    }
  })

  const stripeCustomerId = customer.id

  console.log(mode)

  console.log(newAPIKey)

  const session = await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    metadata: {
      APIkey: newAPIKey,
      payment_type: plan
    },
    line_items: line_items,
    mode: mode,
    success_url:`${clientDOMAIN}/success?api_key=${newAPIKey}`,
    cancel_url: `${clientDOMAIN}/cancel`
  })

  // firebase record
  const timeOfPurchase = new Date().toLocaleDateString('en-us', {month:"short", day:"numeric", year:"numeric", hour:"2-digit", minute:"2-digit", second: "2-digit"})
  const data = {
    purchase_date: timeOfPurchase,
    customer_id: stripeCustomerId,
    APIkey: newAPIKey,
    payment_type: plan,
    status: quantity_type
  }

  const dbRes = await db.collection('api-keys').doc(newAPIKey).set(data, {merge: true})

  res.redirect(303, session.url)

  
})

app.listen(5000, () => console.log("Listening on port 5000."))