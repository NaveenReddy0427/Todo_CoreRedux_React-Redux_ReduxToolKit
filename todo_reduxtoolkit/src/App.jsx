import { useSelector } from "react-redux"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const App = () => {

  const todos = useSelector(state=> state.todos)

  return (
    <>
    <h1>Todo App</h1>
    <TodoInput />
    <TodoList todos={todos} />
    </>
  )
}

export default App