import { useState } from "react";

const AddForm=(props)=>{
  const activityarr = props.activityarr;
  const setactivityarr= props.setactivityarr;
  const [newactivity,setnewactivity] =useState("")
  const handlechange = (even)=>{
    setnewactivity(even.target.value)
  }
  const addelement =()=>{
    setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
  }
  return(
    <div className="flex flex-col gap-3"> 
    <h1 className="text-2xl font-medium">Manage Activies</h1>
    <div>
       
        <input  value={newactivity} onChange={handlechange}type="text" className="border border-black bg-transparent" placeholder="Next Activity?"/>
        <button onClick={addelement} className="border border-black bg-black text-white">Add</button>
      </div>
    </div>
      
  )
};
export default AddForm;