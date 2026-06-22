import React from 'react'

export const InputDemo2 = () => {

    
    const dateHandler = (event)=>{

        //console.log(event.target.value)
        const date = new Date() //sys
        const inputDate = new Date(event.target.value)

        date.setHours(0,0,0,0);
        inputDate.setHours(0,0,0,0)

        const diff = Math.round(inputDate-date)/(1000*60*60*24)
        console.log(diff)
    }
    //[A-Z]
    //[a-z]
    //[]
    //len
    //[0-9]
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo2</h1>
        <div>
            <label>DATE</label>
            <input type='date' onChange={(event)=>{dateHandler(event)}}></input>
        </div>
        <div>
            <label>password</label>
            <input type='text'></input>
            <p>1 cap</p>
            <p>1 small</p>
            <p>1 spec char</p>
            <p>1 number</p>
            <p>8 char</p>
        </div>
    </div>
  )
}
