const Todo =(props) =>{
  const activie = props.active;
  const setactarr = props.setactive

  function handleDelete(deletedid) {
    let temparr = activie.filter(function(item) {
      if(item.id===deletedid) {
        return false
      }else{
        return true
      }
    })
    setactarr(temparr)
  }
  return(
    <>
    <div className="flex justify-between">
    <p>{props.index+1}.{props.activity}</p>
    <button className="text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
    </div>    
       
    </>
  )
};
export default Todo;