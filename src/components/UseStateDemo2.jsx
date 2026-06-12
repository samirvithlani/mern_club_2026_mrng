import React, { useState } from 'react'

export const UseStateDemo2 = () => {

    const [loader,setLoader] = useState(true)
    const stopLoader = ()=>{
        //loader == false -->directly ?? no --> setLoder(false)
        setLoader(false)
        setTimeout(() => {
            setLoader(true)
        }, 3000);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 2</h1>
        {
            loader == true && <h1>Loading...</h1>
        }
        <button onClick={stopLoader}>Stop</button>

        {/* <button onClick={()=>{setLoader(false)}}>Stop 1</button> */}
        
    </div>
  )
}
