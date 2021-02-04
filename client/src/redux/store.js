import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import {rootReducer} from "./reducers/root.reducer"
import {initialState} from "./initialState";

export const store = createStore(rootReducer, initialState(), composeWithDevTools(applyMiddleware(thunk)))
