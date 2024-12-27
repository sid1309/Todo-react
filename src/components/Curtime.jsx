import Item from "./Item";
function Curtime()
{

  let food=["dal","roti","ghee","paneer","chicken"];
  return(
    <>
    <h1>Healthy Food</h1>
    <ul className="list-group">
      {food.map((item)=>{<Item key={item} food={item}></Item>})}
</ul>
    </>
  );

}
export default Curtime;