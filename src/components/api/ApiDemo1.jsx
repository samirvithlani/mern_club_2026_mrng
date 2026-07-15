import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MyTable } from '../MyTable'
import { Loader } from '../Loader'
import { Link } from 'react-router-dom'

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
    const [isLoading, setisLoading] = useState(false)


    const getAllUsers  = async()=>{
        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log(res) //axios object
        console.log(res.data)
        console.log(res.data.message)
        console.log(res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)
        setisLoading(false)
    }
    const headers = Object.keys(users.length>0 && users[0])

    useEffect(()=>{
        getAllUsers()
    },[])
        const deleteUser = async(id) => {
            const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
            console.log(res) //axios
            if(res.status==204){
                alert("user deleted..")
                getAllUsers()
            }
        }

    
    //[] ->state variable --> change --> recall
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo1</h1>
        {
            isLoading && <Loader/>
        }

        {/* <button onClick={getAllUsers}>GET</button> */}
        {message}
        <MyTable headers ={headers} data ={users} renderAction={(user) => (
            <>
                <button className='btn btn-danger' onClick={() => deleteUser(user._id)}>Delete</button> 
                <Link className='btn btn-warning' to={`/updateuser/${user._id}`} >Update</Link>
            </>
        
        )}
        ></MyTable>
    </div>
    
  )
}
