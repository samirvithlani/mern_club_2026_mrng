import React from 'react'

export const MapDemo4 = () => {
      var users = [
        {id:1,name:"amita",age:23,status:true,gender:"female",salary:25000},
        {id:2,name:"raj",age:22,status:true,gender:"male",salary:28000},
        {id:3,name:"parth",age:24,status:false,gender:"male",salary:32000},
        {id:4,name:"arjun",age:25,status:false,gender:"male",salary:35000},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP demo 4</h1>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                        <th>SALARY</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr style={{backgroundColor:user.gender=="female" && "pink"}}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                {/* <td style={{color:"yellow"}}>{user.age}</td> */}
                                {/* <td style={{color:user.age>22 ?"yellow":"white"}}>{user.age}</td> */}
                                <td style={{color:user.age>22 && "yellow"}}>{user.age}</td>
                                <td>{user.gender}</td>
                                <td style={{backgroundColor:user.salary>30000 && "red"}}>{user.salary}</td>
                                <td>{user.status?"Active":"NOt Active"}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}
