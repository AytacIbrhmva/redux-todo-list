import axios from "axios";
import { TODO_ALL_ACTION_TYPE } from "../actionTypes";


export const getTodosAction = () => async (dispatch) => {
    try {
        dispatch({type: TODO_ALL_ACTION_TYPE.GET_TODOS, payload: {loading: true}})
        const {data} = await axios.get('http://localhost:3003/users')
        dispatch({type: TODO_ALL_ACTION_TYPE.GET_TODOS, payload: {loading: false, data: data}})
    } catch(error) {
        console.log(error);
    }
}

export const createTodoAction = (todoData) => async (dispatch) => {
    try {
        const {data} = await axios.post('http://localhost:3003/users', todoData)
        dispatch({type: TODO_ALL_ACTION_TYPE.CREATE_TODO, payload: data})
    } catch(error) {
        console.log(error);
    }
}

export const updateTodoAction = (todoData) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`http://localhost:3003/users/${todoData.id}`)
        dispatch({type: TODO_ALL_ACTION_TYPE.UPDATE_TODO, payload: todoData})
    } catch(error) {
        console.log(error);
    }
}

export const deleteTodoAction = (todoData) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:3003/users/${todoData.id}`)
        dispatch({type: TODO_ALL_ACTION_TYPE.DELETE_TODO, payload: todoData})
    } catch(error) {
        console.log(error);
    }
}