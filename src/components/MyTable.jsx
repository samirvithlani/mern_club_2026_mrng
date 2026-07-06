import React from 'react'

export const MyTable = (props) => {
    //{keys:[5],data:[]}
  return (
    <table className={props.clname || "table"}>
        <thead>
            <tr>
               {
                 props.headers?.map((h)=>{
                    return <th>{h}</th>
                })
               }
            </tr>
        </thead>
        <tbody>
          {
            ////  {id:1,name:"amit",age:23,salary:25000},
            props.data?.map((tr)=>{
              return <tr>
                {
                  
                  //['id', 'name', 'age', 'salary']
                  props.headers.map((td)=>{
                    return <td>{tr[td]}</td>
                  })
                }
                 {
                  props.renderAction &&
                  <td>
                    {props.renderAction(tr)}
                  </td>
                }
              </tr>
            })
          }
        </tbody>
    </table>
  )
}
