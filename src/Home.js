import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
export default function Home() {
    const {c}=useSelector(state=>state.custom)
    // const value=20
    const [value,setvalue]=useState();
    const [svalue,setsvalue]=useState();
  
    const handleValue=()=>{

    }
    const dispatch = useDispatch();
    const add=()=>{
        dispatch({
            type:"increment"
            
        })
        
    }
    const sub=()=>{
        dispatch({
            type:"decrement"
        })
        
    }
    const plus=()=>{
        dispatch({
            type:"addition",
            payload:Number(value),
            
            payload2:Number(svalue)
        })
        
    }
    const minus=()=>{
        dispatch({
            type:"sub",
            payload:Number(value),
            
            payload2:Number(svalue)
        })
        
    }
  return (
    <div>
        <h2>{c}</h2>
<button onClick={add}>INCREMENT</button>
<button onClick={sub}>DECREMENT</button>
<button onClick={plus}>ADDITION</button>
<button onClick={minus}>SUBTRACTION</button>

<input type="number" placeholder='Value' value={value} onChange={(e)=>setvalue(e.target.value)}  />
<input type="number" placeholder='Value' value={svalue} onChange={(e)=>setsvalue(e.target.value)}  />

{console.log(value)}
    </div>
  )
}
