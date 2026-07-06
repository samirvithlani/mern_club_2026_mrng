import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MyTable } from '../MyTable'

export const ApiDemo1 = () => {
    //docu 
    //url
    //response
    //status
    //param
    //headers
    //Data if yes data type
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])


    const getAllUsers  = async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log(res) //axios object
        console.log(res.data)
        console.log(res.data.message)
        console.log(res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)
    }
    const headers = Object.keys(users.length>0 && users[0])

    useEffect(()=>{
        getAllUsers()
    },[])
    //[] ->state variable --> change --> recall
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo1</h1>

        {/* <button onClick={getAllUsers}>GET</button> */}
        {message}
        <MyTable headers ={headers} data ={users}></MyTable>
    </div>
    
  )
}
