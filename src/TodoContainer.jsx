import { useState } from "react";
import AddForm from "./AddForm";
import TodoLIst from "./TodoList";

const TodoContainer =()=>{
  const [activityarr,setactivityarr] =useState([
    {
      id:1,
      activity:"Go For Walk"
    },
    {
      id:2,
      activity:"Wake up at 6am"
    },
    {
      id:3,
      activity:"complete your morning routine"
    }
  ])
  return(
    <>
    <div className="flex gap-6 flex-wrap">
    <AddForm activityarr ={activityarr} setactivityarr ={setactivityarr}/>
    <TodoLIst activityarr ={activityarr} setactivityarr ={setactivityarr}/>
    </div>
    
    </>
  )
};
export default TodoContainer;