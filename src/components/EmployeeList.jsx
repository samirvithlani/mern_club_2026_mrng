import React from 'react'

//props stands for property
//props - {}
export const EmployeeList = (props) => {
    //{title:"",empList:[]}
    console.log(props)
  return (
    <div style={{textAlign:"center"}}>
        <h1>Employee List - {props.title}</h1>
        {/* <button className='btn btn-primary' onClick={props.testEmp}>TEST</button> */}
        <button className='btn btn-primary' onClick={()=>{props.testEmp(100)}}>TEST</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.empList.map((emp)=>{
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
