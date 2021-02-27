import axios from 'axios'
import { setUser } from '../reducers/user.reducer'

export const register = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/registration`, {
      email,
      password,
    })

    dispatch(setUser(res.data.user))
    localStorage.setItem('token', res.data.token)
  } catch (e) {
    alert(e.response.data.message)
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/login`, {
      email,
      password,
    })

    dispatch(setUser(res.data.user))
    localStorage.setItem('token', res.data.token)
  } catch (e) {
    alert(e.response.data.message)
  }
}

export const auth = () => async (dispatch) => {
  try {
    if (localStorage.getItem('token')) {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })

      dispatch(setUser(res.data.user))
      localStorage.setItem('token', res.data.token)
    }
  } catch (e) {
    alert(e.response.data.message)
    localStorage.removeItem('token')
  }
}
