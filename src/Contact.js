import React from 'react'
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <Container>
      <h1 style={{textAlign: 'center'}}><Link to = "/">Home</Link></h1>
    </Container>
  )
}

export default Contact