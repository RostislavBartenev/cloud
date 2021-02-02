require('dotenv').config()
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

const User = require('../models/User.Schema')


const serialize = (user) => {
  return {
    id: user.id,
    email: user.email,
    diskSpace: user.diskSpace,
    usedSpace: user.usedSpace,
    avatar: user.avatar,
  }
}


const registrationController = async (req, res) => {

  try {

    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ message: 'Incorrect request' })

    const { email, password } = req.body

    const candidate = await User.findOne(({ email }))

    if (candidate) return res.status(400).json({message: `User with this email ${email} is already exist`})

    const hashedPassword = await bcrypt.hash(password, 8)
    await User.create({ email, password: hashedPassword })

    return res.json({ message: 'User was created' })

  } catch (e) {
    console.error(e)
    res.send({ message: 'Server error' })
  }
}

const loginController = async (req, res) => {

  try {

    const { email, password } = req.body
    const  candidate = await User.findOne({email})

    if (!candidate) return res.status(404).json({ message: 'Incorrect email or password' })

    const isPassValid = bcrypt.compareSync(password, candidate.password)

    if (!isPassValid) return res.status(404).json({ message: 'Incorrect email or password' })

    const token = jwt.sign({ id: candidate.id }, process.env.SECRETKEY, { expiresIn: '1h' })

    const user = serialize(candidate)

    return res.json({
      token,
      user
    })

  } catch (e) {
    console.error(e)
    res.send({ message: 'Server error' })
  }

}


module.exports = {
  registrationController,
  loginController
}
