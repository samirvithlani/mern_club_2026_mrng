import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [isClicked, setisClicked] = useState(false)
const nameHandler = (event)=>{
    console.log(event.target.value)
    setname(event.target.value)
}

  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <div>
            
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{setage(event.target.value)}}></input>
            {/* {age} */}
        </div>
        <div>
            <label>Fav Color</label>
            <input type='color'></input>
        </div>
        <div>
            <button onClick={()=>{setisClicked(true)}}>CLICK</button>
        </div>
        {
            isClicked == true &&  <div>
            <h1>OUTPUT</h1>
            <h3>NAme = {name}</h3>
            <h3>AGe = {age}</h3>
        </div>
        }
        
    </div>
  )
}
