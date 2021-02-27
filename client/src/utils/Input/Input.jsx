import React from 'react'

import './Input.scss'

const Input = ({
  type, value, setValue, placeholder,
}) => (
  <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
    type={type}
    placeholder={placeholder}
  />
)

export default Input
