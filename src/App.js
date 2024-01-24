import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAction, createTodoAction, deleteTodoAction, updateTodoAction } from './redux/actions/todoListActions';

function App() {  
  const dispatch = useDispatch()
  const {todos, loading} = useSelector(state => state.todos)
  const [updateActive, setUpdateActive] = useState(false)
  const [editTodo, setEditTodo] = useState('')
  const [todoData, setTodoData] = useState({
    title: "",
    completed: false
  },)

  const addTodo = () => {
    dispatch(createTodoAction(todoData))
    setTodoData('')
  }

  const updateTodoActive = (todo) => {
    setEditTodo(todo)
    setUpdateActive(true)
  }

  const updateTodo = () => {
    dispatch(updateTodoAction(editTodo))
    setUpdateActive(false)
  }

  useEffect(() => {
    dispatch(getTodosAction())
  }, [])

 
  return (
    <div className="App">
      <h1>Todo list</h1>
        <input type="text" value={todoData ? todoData.title : ''} onChange={e => setTodoData({...todoData, title: e.target.value })} placeholder="add new todo" />
        <button onClick={() => addTodo()}>add todo</button>
        <br/>
        {updateActive &&
          <>
          <input type="text" value={editTodo ? editTodo.title : ''} onChange={e => setEditTodo({...editTodo, title: e.target.value })}/>
          <button onClick={() => updateTodo()}>update todo</button>
          </>
        }
      {loading ? 
        <p>loading...</p> :
        todos.map((todo, index) => (
          <div key={index}>
            <p>{index +1} {todo.title}</p>
            <button onClick={() => dispatch(deleteTodoAction(todo))}>delete</button>
            <button onClick={() => updateTodoActive(todo)}>edit</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
