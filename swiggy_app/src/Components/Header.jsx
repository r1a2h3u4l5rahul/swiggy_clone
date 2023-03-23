import React from 'react'
import { TbDiscount2 } from 'react-icons/tb'
import {MdAccountBox} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
import {MdHelp} from 'react-icons/md'

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
       <div className="navbar-right">
        <ul>
            {/* <li>
            <Search />
            </li> */}
            <li>
            <TbDiscount2  />
            <p>Offer</p> 
            </li>
            <li>
            <MdHelp />
           <p>Help</p> </li>
            <li>
            
              <MdAccountBox className='profile-icon' />
         
           <p>Sign In</p> </li>
            <li>
            <FaShoppingCart />
           <p>Cart</p> </li>

        </ul>
       </div>
    </div>
    </>
  )
}

export default Header;