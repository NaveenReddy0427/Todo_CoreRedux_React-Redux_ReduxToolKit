import { addTodoActionCreator, addUserActionCreator, removeTodoActionCreator, toggleTodoActionCreator } from "./actionCreator.js";
import store from "./store.js";

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addTodoActionCreator('learn reactjs'))
store.dispatch(addTodoActionCreator('play cricket'))
store.dispatch(addTodoActionCreator('code all day'))

store.dispatch(addUserActionCreator("naveen"))

// store.dispatch(removeTodoActionCreator(store.getState().todos[0].id))
// store.dispatch(toggleTodoActionCreator(store.getState().todos[0].id))