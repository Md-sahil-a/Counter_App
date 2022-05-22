import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);

    if(count%2===0)
    {
       var style ={
        color:'green'
        }
        console.log("even")
    }else{
        var style={
            color:'red'
            }
        console.log("Odd")
    }

    return (
        <div className="main">
            <h1 style={style}>Counter: {count}</h1>
            <button onClick={()=> {if (count>0) {setCount(count-1)}}}>Decrement</button>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> setCount(count*2)}>Double</button>
        </div>
        
    )
}

export {Counter};