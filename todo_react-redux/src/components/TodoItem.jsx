import { useDispatch } from "react-redux"
import { removeTodoActionCreator, toggleTodoActionCreator } from "../redux/actions/todoActions"

const TodoItem = ({ id, text, isCompleted }) => {

    const dispatch = useDispatch()

    function removeTodo(){
        dispatch(removeTodoActionCreator(id))
    }

    function toggleTodo(){
        dispatch(toggleTodoActionCreator(id))
    }

  return (
    <div>
        <input type="checkbox" onChange={toggleTodo} checked={isCompleted} />
        <span>{text}</span>
        <button onClick={removeTodo}>X</button>
    </div>
  )
}

export default TodoItem