import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoActionCreator } from "../redux/actions/todoActions"

const TodoInput = () => {

    const dispatch = useDispatch()

    const [todo, setTodo]  = useState('');

    function addTodo(){
        if(todo.trim()!== ''){
            dispatch(addTodoActionCreator(todo))
            setTodo('')
        }
    }

  return (
    <>
    <div>
        <input type="text" placeholder="Enter Todo" onChange={e=> setTodo(e.target.value)} value={todo} />
        <button onClick={addTodo} >Add Todo</button>
    </div>
    </>
  )
}

export default TodoInput