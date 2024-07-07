import Signin from "./page/Signin";
import Signup from "./page/Siginup";
import Landing from "./page/Landing";
import { useState } from 'react';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = ()=>{
  const [users,setusers] = useState([
    {
      username:"ranjith",
      password:"123"
    }
  ])
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin users={users} setusers={setusers}/>}></Route>
        <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path='/landing' element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
 }
 export default App;