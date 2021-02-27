import React, { useEffect } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Components/Navbar/Navbar'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import { auth } from './redux/actions/user.action'

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          {!isAuth
            && (
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
            )}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
