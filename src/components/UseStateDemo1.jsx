import React, { useState } from 'react'

export const UseStateDemo1 = () => {

       // var count =0;
       const [count,setCount] = useState(0)
       //count -> state variable..
       //setCount --> setter function -->to make any changes in count we have to use setter funciton
       //directly it will not reflect  in on og dom
       //useState(0) --> initial value..

        const increseCount = ()=>{
            //count++
            setCount(count+1)
         //   console.log("count = ",count)
        }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increseCount}>+</button>
    </div>
  )
}
