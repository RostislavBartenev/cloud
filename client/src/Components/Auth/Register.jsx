import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { register } from '../../redux/actions/user.action'

import './Auth.scss'
import Input from '../../utils/Input/Input'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  return (
    <div className="auth">
      <div className="auth__header">Registration</div>
      <Input value={email} setValue={setEmail} type="email" placeholder="Email" />
      <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
      <button type="submit" onClick={() => dispatch(register(email, password))} className="auth__btn">Register</button>
    </div>
  )
}

export default Register
