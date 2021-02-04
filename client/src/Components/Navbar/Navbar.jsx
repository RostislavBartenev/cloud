import React from 'react'

import './Navbar.scss'

import Logo from './assets/cloud-network.svg'
import {NavLink} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/reducers/user.reducer";

const Navbar = () => {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  return (
    <div className="navbar">
      <div className="container">
        <img src={Logo} alt="logo" className="navbar__logo"/>
        <div className="navbar__header">Cloud</div>
        {
          !isAuth ?
            <>
              <div className="navbar__login"><NavLink to="/login">Login</NavLink></div>
              <div className="navbar__register"><NavLink to="/register">Register</NavLink></div>
            </>
          : <>
              <div className="navbar__login"><NavLink to="/" onClick={() => dispatch(logout())}>Logout</NavLink></div>
            </>
        }
      </div>
    </div>
  )
}

export default Navbar
