import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1b = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getUsers  =async()=>{
        //Promise<AxiosResponse<>,
        const res = await axios.get(`https://node5.onrender.com/user/user/`)
        console.log(res) // axios object..
        console.log(res.data) //api response...
        console.log(res.data.message)
        console.log(res.data.data) 
        setmessage(res.data.message)
        setusers(res.data.data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1 BACKUP</h1>
        <button onClick={getUsers}>GET</button>
        {message}
        {
            users.map((u)=>{
                return <li>{u.name}</li>
            })
        }
    </div>
  )
}
