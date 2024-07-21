import React from 'react'
import Home from '../docsections/home'
import Instructions from '../docsections/instructions'
import Endpoints from '../docsections/endpoints'


function Docstext(props) {

  const { currentModal } = props

  return (
    <>
      {currentModal === "Docs Home" && (<Home />)}
      {currentModal === "Instructions" && (<Instructions />)}
      {currentModal === "Endpoints" && (<Endpoints />)}
    </>
  )
}

export default Docstext