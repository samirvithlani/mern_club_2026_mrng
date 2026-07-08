import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ApiDemo5 = () => {

    const navigate = useNavigate()

    const addUser = async()=>{

        const user ={
            name:"prachi1",
            email:"prachi11@gmail.com",
            password:"prachi123",
            age:23,
            isActive:true
        }
        try{
        const res = await axios.post(`https://node5.onrender.com/user/user/`,user)
        console.log(res.data) //api response.
        console.log(res.status)
        if(res.status==200){
            //alert("user added !!")
            toast.success("user added")
            navigate("/apidemo1") //path name check in app.js
        }
        }catch(err){

            //alert("error while adding data..")
            toast.error("error while adding user...")
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo5</h1>
        <button onClick={addUser}>ADD USER</button>
    </div>
  )
}

