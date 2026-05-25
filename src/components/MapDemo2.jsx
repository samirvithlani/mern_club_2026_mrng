import React from 'react'

export const MapDemo2 = () => {

    var users = [
        {id:1,name:"amit",age:23,status:true},
        {id:2,name:"raj",age:22,status:true},
        {id:3,name:"parth",age:24,status:false},
        {id:4,name:"arjun",age:25,status:false},
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP demo 2</h1>
        {
            users.map((user)=>{
                return <li>{user.id} {user.name} {user.age} {user.status ?"True" :"False"}</li>
            })
        }
    </div>
  )
}
