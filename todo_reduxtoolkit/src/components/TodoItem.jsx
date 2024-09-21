import { useDispatch } from "react-redux"
import { removeTodo, toggleTodo } from "../redux/slices/todoSlice"

const TodoItem = ({ id, text, isCompleted }) => {

    const dispatch = useDispatch()

    function removeTodoItem(){
        dispatch(removeTodo(id))
    }

    function toggleTodoItem(){
        dispatch(toggleTodo(id))
    }

  return (
    <div>
        <input type="checkbox" onChange={toggleTodoItem} checked={isCompleted} />
        <span>{text}</span>
        <button onClick={removeTodoItem}>X</button>
    </div>
  )
}

export default TodoItem