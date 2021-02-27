import React, { useState } from 'react'

import './Auth.scss'
import { useDispatch } from 'react-redux'
import Input from '../../utils/Input/Input'

import { login } from '../../redux/actions/user.action'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  return (
    <div className="auth">
      <div className="auth__header">Authorization</div>
      <Input value={email} setValue={setEmail} type="email" placeholder="Email" />
      <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
      <button type="submit" onClick={() => dispatch(login(email, password))} className="auth__btn">Login</button>
    </div>
  )
}

export default Login
