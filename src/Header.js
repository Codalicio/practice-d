import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <h1 style={{textAlign: 'center'}}><Link to='/about'>About Page</Link></h1>
    <h2 style={{textAlign: 'center'}}><Link to='/contact'>Contact Page</Link></h2>
    </>
  )
}

export default Header