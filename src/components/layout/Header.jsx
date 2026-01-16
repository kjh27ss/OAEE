import React from 'react'
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';
import NavBar from '../layout/NavBar';

const Header = () => {
  return (
    <div className='header'>
      <div className="inner d-flex">
        <a href="#" className='tlogo'><img src={logo} alt="로고" /></a>
        <NavBar />
        <div className='d-flex'>
          <a href="#"><img src={cart} alt="장바구니" /></a>
          <button className='login-btn'>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header