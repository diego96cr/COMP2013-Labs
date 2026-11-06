
//This component will contain 
//1. Body for the title or message
//2. Button for deleting this item
//3. Button to edit this item
//4. A checkbox that will be used to check the item if completed

import type { TodoCardFunctions} from "./TodoApp"

export default function TodoCard({id, checked, title, handleTodoCheck,handleDeleteTodo, handleEditTodo} : TodoCardFunctions){
return <div>
    <input type="checkbox" name="checked" id="checked" checked = {checked} onChange={(e) => handleTodoCheck(e,id)}/>
    <span>{title}</span>
    <button onClick={() => handleDeleteTodo(id)}>Delete</button>
    <button onClick={() =>handleEditTodo(id)}>Edit</button>
</div>
}