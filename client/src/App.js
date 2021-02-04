import {useEffect} from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom"

import './App.scss'
import Navbar from "./Components/Navbar/Navbar"
import Register from "./Components/Auth/Register"
import Login from "./Components/Auth/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./redux/actions/user.action";

function App() {

  const isAuth = useSelector(state => state.user.isAuth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          {!isAuth &&
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          }
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
