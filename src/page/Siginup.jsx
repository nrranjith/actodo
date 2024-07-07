import{Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';


const Signup = (props)=>{
  const navigate = useNavigate()
  const users = props.users;
  const setusers = props.setusers
  const [eusername,seteusername] =useState()
  const [epassword,setepassword] = useState()
  const handleUInput =(evn)=>{
    seteusername(evn.target.value)
  };
  const handlePinput =(evn)=>{
    setepassword(evn.target.value)
  };
  const addUser =()=>{
    setusers([...users,{username:eusername,password:epassword}])
    navigate('/')
  }
  return(
    <div className="bg-black p-10">
    <div className='bg-white p-10 border rounded-md'>
      <h1 className="text-3xl font-medium">Hey Hi</h1>
      <p>Signup here:)</p>
      <div className="flex flex-col gap-2 my-2">
        <input type="text" placeholder="username" className="border rounded-md border-black p-1 w-52 bg-transparent" onChange={handleUInput}></input>
        <input type="text" placeholder="password" className="border rounded-md border-black p-1  bg-transparent w-52" onChange={handlePinput}></input>
        <input type="text" placeholder="confirm password" className="border rounded-md border-black p-1 bg-transparent w-52"></input>
        <button className="rounded-md w-24 p-1 bg-yellow-300" onClick={addUser}>Signup</button>
        <p>Already have an account? <Link to={"/"} className="underline">Signin</Link></p>
      </div>
    </div>

    </div>
  )
};
export default Signup;