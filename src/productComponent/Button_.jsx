import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

export default function Button_() {
  return (
    <div>
    <Button variant='dark'>Buy Now</Button>
    <Button variant='warning' style={{marginLeft:"55px"}}>Add to card</Button>
    </div>
  )
}
