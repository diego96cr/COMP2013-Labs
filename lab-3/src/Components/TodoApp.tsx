import { useState, type ChangeEvent, type SubmitEvent } from "react";
import FormComponent from "./FormComponent";
import TodoContainer from "./TodosContainer";
export interface TodoCardProps{
    id: string;
    title:string;
    checked:boolean;
}
export interface TodoCardFunctions extends TodoCardProps{
    handleTodoCheck : (e: ChangeEvent<HTMLInputElement>, id:string) => void;
    handleDeleteTodo: (id:string) => void;
    handleEditTodo : (id:string) => void;
}
export interface TodosContainerProps{
    todosList: TodoCardProps[];
    handleTodoCheck: (e:ChangeEvent<HTMLInputElement>, id: string) => void;
    handleDeleteTodo: (id:string) => void;
    handleEditTodo : (id:string) => void;
}

export interface FormComponentProps extends TodoCardProps{
    handleFormOnChange: (e:ChangeEvent<HTMLInputElement>) => void;
    handleOnSubmit: (e:SubmitEvent<HTMLFormElement>) => void;
    }

export default function TodoApp(){
    //States
    //A state to store the input change
    //once the submit button is clicked, the state will be stored
    // as a Todo entry in other state that will save a list of Todos

    const [todo, setTodo] = useState<TodoCardProps>({
        id: "",
        title:"",
        checked: false,
    });

    //Second state: a state to store all the todos entry in one array
    const [todosList,setTodosList] = useState<TodoCardProps[]>([]);

    //Handlers
    const handleFormOnChange = (e:ChangeEvent <HTMLInputElement>) => {
        setTodo((prevTodo) => ({...prevTodo, [e.target.name]:e.target.value}))
    };


    const handleOnSubmit = (e:SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(todo.id === ""){
            setTodosList((prevList) => [...prevList, 
                {
                    id: crypto.randomUUID(),
                    title: todo.title,
                    checked: false,
                }
            ]);
        }
        else{
            setTodosList((prevList) =>
                prevList.map((entry) => 
                    entry.id === todo.id? {...entry, title: todo.title} : entry,
                )
            );
        }
            setTodo({
                id: "",
                title:"",
                checked: false,
            });
        };

    //Third Handler
    //Handle the checkbox toggle in the Todo Card

    const handleTodoCheck = (e:ChangeEvent<HTMLInputElement>, id: string) => {
        setTodosList((prevList) => 
           prevList.map((entry) => 
            entry.id === id
        ?{...entry, checked: e.target.checked}
        :entry
        ),
    );
    };

    //fourth handler: deleting an entry using the delete button
    const handleDeleteTodo = (id: string) => {
        setTodosList((prevList) => prevList.filter((entry) => entry.id !== id));
    };

    //5. Handle editing an entry to change the title

    const handleEditTodo = (id: string) => {
        const todoEntry = todosList.find((entry) => entry.id === id) || {title:"",id:"", checked:false,};
        setTodo({...todoEntry});
    }

    //Main Return
    return <div>
        <h1>Todo List App</h1>
        <FormComponent {...todo} 
        handleFormOnChange = {handleFormOnChange}
        handleOnSubmit= {handleOnSubmit}
        />
        <TodoContainer todosList = {todosList} 
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleTodoCheck={handleTodoCheck}/>
    </div>
}