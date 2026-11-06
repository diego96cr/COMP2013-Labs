//This component will have a Todo list as a Prop
//Then we will map into several TodoCards

import type {TodosContainerProps} from "./TodoApp";
import TodoCard from "./Todocard";

export default function TodoContainer({todosList, handleTodoCheck, handleDeleteTodo, handleEditTodo}: TodosContainerProps){
    return <div>
        {todosList.length > 0 || "Todo List is empty"}
        {todosList.map((todo) => (
            <TodoCard key = {todo.id}{...todo} handleTodoCheck={handleTodoCheck}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}/>
        ))}
    </div>
}