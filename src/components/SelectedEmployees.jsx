import React from 'react'

export const SelectedEmployees = (props) => {
  return (
    <div>
        <h1>SELECTED EMPLOYEES</h1>
         <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.selectedEmp.map((emp)=>{
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>{props.deleteUser(emp.id)}}>DELETE</button>
                                <button className='btn btn-primary' onClick={()=>{}}>SELECT</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
