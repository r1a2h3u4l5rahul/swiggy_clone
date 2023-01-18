import React from 'react'
import SwiggyLogo from '../assets/images/swiggylogo.png'
import Search from './Search'


const Header = () => {
  return (
    <>
    <div className='navbar'>
    <div className='nav-left'>
       <img src={SwiggyLogo} className="swiggylogo" alt='logo' />
       <div className="location">
        <span>Other</span>
        Pune,Maharashtra,India <span className='location-arrow'>&#9660;</span>
       </div>
       </div>
       <div className="navbarmenu">
        <ul>
            {/* <li>
            <Search />
            </li> */}
            <li>Offer</li>
            <li>Help</li>
            <li>Sign In</li>
            <li>Cart</li>

        </ul>
       </div>
    </div>
    </>
  )
}

export default Header;