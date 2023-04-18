import './card.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container  from 'react-bootstrap/Container'
import  Card  from 'react-bootstrap/Card'

import Button_ from './Button_'

export default function ChildCard({price,src,title}) {
  return (
    <React.Fragment>
      <Container className='container'>
      <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={src}/>
      <Card.Body>
        <Card.Title>Product Price: {price}$</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        <Button_/>
      </Card.Body>
    </Card>
{/*  */}
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src}/>
      <Card.Body>
        <Card.Title>Product Price: {price}$</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        <Button_/>
      </Card.Body>
</Card>
{/*  */}
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src}/>
      <Card.Body>
        <Card.Title>Product Price: {price}$</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        <Button_/>
      </Card.Body>
</Card>
      </Container>
    {/*  */}
    
    </React.Fragment>
  )
}
