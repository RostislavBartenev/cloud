import { combineReducers } from "redux"
import {userReducer} from "./user.Reducer"
import {fileReducer} from "./file.Reducer"

export const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
})
