const express = require('express')
const { generateApiKey } = require('generate-api-key')
const app = express()

app.use(express.json())
app.use(require('cors')())
require('dotenv').config()
const Stripe = require("stripe")

//Variables
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
// const stripe = require('stripe')(STRIPE_SECRET_KEY)
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

app.post('/checkout-session/:plan', async (req, res) => {
  //assign id, mode, and line_items
  //generate api key
  //make customer
  //grab customer.id in a variable
  //create a checkout session with the id, metadata, line_items, mode, success and cancel urls

  const products = await getStripeProducts()

  const { plan } = req.params
  const { vibe } = req.query
  let price_ID, mode, line_items

  const soldItem = products.filter((item) => {
    return item.product.metadata.plan === plan && item.product.metadata.vibe === vibe
  })

  console.log("This is the sold item", soldItem)

  if(soldItem.length > 0) {
    price_ID = soldItem[0].id
    if(soldItem[0].type === 'recurring') {
      mode = 'subscription'
    } else if (soldItem[0].type === 'null') {
      mode = 'payment'
    }
    line_items = [
      {
        price: price_ID,
        quantity: 1
      }
    ]

    // return res.status(200).json({ "message": line_items})
  } else {
    return res.sendStatus(403)
  }



  
})

app.listen(5000, () => console.log("Listening on port 5000."))