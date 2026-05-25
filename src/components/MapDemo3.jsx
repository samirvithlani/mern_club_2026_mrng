import React from 'react'

export const MapDemo3 = () => {
    var users = [
        {id:1,name:"amit",age:23,status:true},
        {id:2,name:"raj",age:22,status:true},
        {id:3,name:"parth",age:24,status:false},
        {id:4,name:"arjun",age:25,status:false},
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 3</h1>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.status?"Active":"NOt Active"}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}
