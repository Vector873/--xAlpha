import { useState } from 'react'
import './App.css'
import State from './hooks/State';  //import state component to use it in app.jsx
import Effect from './hooks/Effect'; //import Effect component to use it in app.jsx
import Reducer from './hooks/Reducer';  //import Reducer component to use it in app.jsx
import Ref from "./hooks/Ref"; //import Ref component to use it in app.jsx
import Memo from './hooks/Memo'; //import Memo components to use it in app,jsx

function App() {
  let a=1,b=2;
  const [sel,setsel] = useState(0);
  const [val,setval] = useState(0);
  const [area,setarea] = useState(0);
  const cir  = new circle(0);
  const sq  = new square(0);
  const check=(val)=>{
    if(val=="cir"){
      setsel(1);  //set 1 for the calculate the area of circle
    }
    else if(val=="sq"){
      setsel(2);  //set 1 for the calculate the area of square
    }
  }
  function calcir(){
    cir.calculate(val);  //object consturction of class circle
    setarea(cir.getarea());
  }
  function calsq(){
    sq.calculate(val);  //object consturction of class sqare
    setarea(sq.getarea());
  }
  return (
    <>
      <div style={{width:"10rem"}}>
        <h3>Calculate area</h3>
        <div style={{display:"flex", flexDirection:"column",gap:"0.8rem"}}>
          <select onChange={(e)=>check(e.target.value)}>
            <option value="" disabled defaultValue={"sel"}>Select shape</option>
            <option value="cir">Circle</option>
            <option value="sq">Square</option>
          </select>
          {sel==1?<>
          <input placeholder='Enter radius' onChange={(e)=>setval(e.target.value)}></input></>:sel==2?<>
          <input placeholder='Enter height or width' onChange={(e)=>setval(e.target.value)}></input></>:null}
          {sel==1?<button onClick={calcir}>Calculate</button>:sel==2?<button onClick={calsq}>Calculate</button>:null}
          {area!=0?<div><h4>Area = {area} unit^2</h4></div>:null}
        </div>
      </div>
      <State />  {/*using State components*/}
      <Effect />  {/*using Effect components*/}
      <Reducer />  {/*using Reducer components*/}
      <Ref /> {/*using Ref components*/}
      <Memo a={a} b={b}/> {/*using Memo components ----- we passed props for addition*/}
    </>
  )
}

export default App
