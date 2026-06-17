import React from 'react'
import { MyTable } from './MyTable'

export const TableDemo = () => {
    //headers id,name email age salary
    //table demo2 = id firstname lastnem email salary password

    const users =
    [
        {id:1,name:"amit",age:23,salary:25000},
        {id:2,name:"jaya",age:26,salary:55000},
        {id:3,name:"neha",age:24,salary:45000},
        {id:4,name:"amita",age:21,salary:35000},
    ]

    //find key from json object
    const keys =Object.keys(users[0])
    console.log("keys",keys)
    

  return (
    <div style={{textAlign:"center"}}>
        <h1>TABLE DEMO</h1>
        <MyTable headers ={keys} data = {users} clname = "table"></MyTable>
    </div>
  )
}
