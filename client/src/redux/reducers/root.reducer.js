import { combineReducers } from 'redux'
import { userReducer } from './user.reducer'
import fileReducer from './file.reducer'

export default combineReducers({
  user: userReducer,
  files: fileReducer,
})
