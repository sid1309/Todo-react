import Todo from "./Todo";
function Todoitems({todolist,onDeleteClick})
{
  return  <div className="items-container">

    {todolist.map((item)=>  
    <Todo key={item} todoname={item.name} tododate={item.date} onDeleteClick={onDeleteClick}
></Todo>)}

</div>
}

export default Todoitems;