import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  return (
    <div className='nav'>
        <h1 className='heading'>Simple Shopping Cart</h1>
        {location.pathname === "/" ?(<Link to='/cart'><button className='cart-btn'>Cart</button> </Link>): <Link to='/'><button className='cart-btn'>Home</button> </Link>}
    </div>
  )
}

export default Navbar