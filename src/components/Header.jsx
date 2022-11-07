import React from 'react'
import '../styles/components/Header.css'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

export const Header = () => {
  const {state:{cart}} = React.useContext(AppContext)
  return (
    <div className='Header'>
        <h1 className='Header-title'>
            <Link to='/'>NewEra Store</Link>
        </h1>
        <div className="Header-checkout">
            <Link to={'/checkout'}>
                <i className='fas fa-shopping-basket'/>
            </Link>
            {cart.length >0 && <div className='Header-alert'>{cart.length}</div>}
        </div>
    </div>
  )
}
