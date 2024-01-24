import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { todoListReducer } from "./reducers/todoListReducer"

const reducers = combineReducers({
    todos: todoListReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;