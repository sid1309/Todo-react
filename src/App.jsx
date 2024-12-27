import Appname from "./components/Appname"
import Addtodo from "./components/Addtodo"
import Todo from "./components/Todo"
import Todoitems from "./components/Todoitems"
import "./App.css";
import WelcomeM from "./components/WelcomeM"
import { useState } from "react"
function App() {



const [todoItems,setTodoItems]=useState([]);

const handleNewItem=(itemName,itemDate)=>{
       let list=[...todoItems,{name:`${itemName}`,date:`${itemDate}`}];
    setTodoItems(list);
}

const handleDelete=(todoItemName)=>
{
    const newTodoItems=todoItems.filter(item=> item.name!==todoItemName);
    setTodoItems(newTodoItems);
}



return <center className='todo-container'> 
    <Appname></Appname>
    <Addtodo onNewItem={handleNewItem}></Addtodo>
   <WelcomeM todoItems={todoItems}></WelcomeM>
    <Todoitems todolist={todoItems}  onDeleteClick={handleDelete}  ></Todoitems>
 </center>
}

export default App;
