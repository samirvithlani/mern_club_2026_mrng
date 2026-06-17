import React from 'react'
import { MyTable } from './MyTable'

export const MyTable2 = () => {
    const employees = [
        {id:101,firstName:"amit",lastName:"thakkar",age:23,salary:45000,bgroup:"A+"},
        {id:101,firstName:"amit",lastName:"thakkar",age:23,salary:45000,bgroup:"A+"}
    ]
    //keys
    const keys = Object.keys(employees[0])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Table 2</h1>
        <MyTable clname = "table table-dark" headers ={keys} data ={employees}></MyTable>
    </div>
  )
}
