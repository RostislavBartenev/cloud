import axios from 'axios'
import { setFiles } from '../reducers/file.reducer'

export default (dirId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/files${dirId ? `?parent=${dirId}` : ''}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      },
    )

    dispatch(setFiles(response.data))
  } catch (error) {
    alert(error.response.data.message)
  }
}
