import { combineReducers } from "redux"
import { userReducer } from "./user.reducer"
import { fileReducer } from "./file.reducer"

export const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
})
