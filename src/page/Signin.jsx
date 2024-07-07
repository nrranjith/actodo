import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Signin = (props)=>{
  const navigate = useNavigate()
  const users = props.users;
  const setusers = props.setusers;

  const [eusername,seteusername] =useState()
  const [epassword,setepassword] = useState()
  const [ruser,setruser] = useState(true)
  const handleUInput =(evn)=>{
    seteusername(evn.target.value)
  };
  const handlePinput =(evn)=>{
    setepassword(evn.target.value)
  };
 const checkUser= ()=>{
  let userFound = false;
    users.forEach((item)=>{
      if(item.username=== eusername && item.password === epassword) {
        console.log("login success")
        userFound = true
        navigate('/landing', {state: {user:eusername}})
      }
    })
    if(userFound===false) {
      console.log('signin falied')
      setruser(false)
    }
  }


  return(
    <div className="bg-black p-10">
    <div className='bg-white p-10 border rounded-md'>
      <h1 className="text-3xl font-medium">Hey Hi</h1>
      {ruser ? <p>I help you manage your activity after you signin</p>: <p className="text-red-500">Please signup before you signin</p>}
      <div className="flex flex-col gap-2 my-2">
        <input type="text" placeholder="username" className="border rounded-md border-black p-1 w-52 bg-transparent" onChange={handleUInput}></input>
        <input type="text" placeholder="password" className="border rounded-md border-black p-1  bg-transparent w-52" onChange={handlePinput}></input>
       <button className="rounded-md bg-cyan-300 w-24 p-1" onClick={checkUser}>Signin</button>
        <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
      </div>
    </div>

    </div>
  )
};
export default Signin;