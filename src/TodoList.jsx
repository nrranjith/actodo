import { useState } from 'react';
import Todo from './Todo'

const TodoLIst =(props)=>{
  const activityarr =props.activityarr;
  const setactivityarr = props.setactivityarr

  
  return(
    
    <div className="bg-blue-200 border rounded-md p-2 flex-grow">
    <h1 className="text-2xl font-medium">Today's Activity</h1>
    {
      activityarr.length===0 ? <p>you have not add anythings</p> : ""}
    {
      activityarr.map((item,index)=>{
        return <Todo activity={item.activity} index={index} id={item.id} active ={activityarr} setactive={setactivityarr}/>
      })
    }
  </div>
  )
};
export default TodoLIst;