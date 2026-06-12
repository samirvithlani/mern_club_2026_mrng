import React from 'react'

export const FuncCall = () => {
    const test = ()=>{
        alert("test called...")
    }
    const test1 = (x)=>{
        alert("test calle"+x)
    }
  return (
    <div style={{textAlign:"center"}}>

        <h1>FuncCall</h1>
        <button onClick={test}>TEST</button>
        <button onClick={()=>{test1(100)}}>TEST 2</button>
    </div>
  )
}
