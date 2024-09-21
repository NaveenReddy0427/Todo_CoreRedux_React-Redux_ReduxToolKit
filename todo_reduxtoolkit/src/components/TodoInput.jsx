import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/slices/todoSlice"


const TodoInput = () => {

    const dispatch = useDispatch()

    const [todo, setTodo]  = useState('');

    function addTodoItem(){
        if(todo.trim()!== ''){
            dispatch(addTodo(todo))
            setTodo('')
        }
    }

  return (
    <>
    <div>
        <input type="text" placeholder="Enter Todo" onChange={e=> setTodo(e.target.value)} value={todo} />
        <button onClick={addTodoItem} >Add Todo</button>
    </div>
    </>
  )
}

export default TodoInput