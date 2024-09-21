import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"

const TodoList = () => {

    const todos = useSelector(state=> state.todos)
    

  return (
    <>
    <div>
        {todos.map(todoitem=>{
            return(
                <TodoItem key={todoitem.id} id={todoitem.id} text={todoitem.text} isCompleted={todoitem.completed} />
            )
        })}
    </div>
    </>
  )
}

export default TodoList