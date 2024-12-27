import { useState } from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
function Addtodo({onNewItem})
{
  const [todoName,setTodoName]=useState();
  const [todoDate,setTodoDate]=useState();

  const handleNameChange=(e)=>{
    setTodoName(e.target.value);
  };

  const handleDateChange=(e)=>{
    setTodoDate(e.target.value);
  };

  const handleAddButton=()=>{
    onNewItem(todoName,todoDate);
    setTodoDate("");
    setTodoName("");
  };
  
  return <div onSubmit={handleAddButton} className="row">
<div className="col-6"><input type="text" placeholder="Enter Todo Here" onChange={handleNameChange} /></div>
  <div className="col-4" onChange={handleDateChange}> <input type="date"  /></div>
  <div className="col-2"><button type="button" className="btn btn-success" onClick={handleAddButton}> <MdOutlinePlaylistAdd /> </button></div>
</div>
}
export default Addtodo;