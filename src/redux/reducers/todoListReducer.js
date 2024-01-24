import { TODO_ALL_ACTION_TYPE } from "../actionTypes";

const initialState = {
    todos: [],
    loading: false,
}

export const todoListReducer = (state=initialState, action) => {
    switch(action.type) {
        case TODO_ALL_ACTION_TYPE.GET_TODOS:
            return {
                ...state,
                todos: action.payload.data,
                loading: action.payload.loading
            };
        case TODO_ALL_ACTION_TYPE.CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TODO_ALL_ACTION_TYPE.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => (
                    todo.id === action.payload.id ? action.payload : todo
                ))
            }
        case TODO_ALL_ACTION_TYPE.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => (
                    todo.id !== action.payload.id
                ))
            }
        default:
            return state;
    }
}