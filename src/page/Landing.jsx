import Header from '../Header';
import Card from '../Card';
import TodoContainer from '../TodoContainer';
import { useLocation } from "react-router-dom";

const Landing = ()=>{
  const data = useLocation()
  return(
  <>
    
    <div className="bg-black p-16">
        <div className="bg-white p-10 border rounded-md">
          <Header user={data.state.user}/>
          <div className="flex justify-between gap-2 my-5 flex-wrap">
    <Card bgcolor={"blue"} title ={23} subtitle = {"Chennai"}/>
      <Card   bgcolor={"red"} title ={"JUN"} subtitle = {"15.02.34"}/>
      <Card   bgcolor={"yellow"} title ={"Built Using"} subtitle = {"React"}/>
     </div>
     <TodoContainer/>
        </div>
      </div>
    
  </>
  )
}
   
      
export default Landing;