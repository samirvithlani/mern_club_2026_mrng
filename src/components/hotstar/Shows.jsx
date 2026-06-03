import React from 'react'
import { Link } from 'react-router-dom'

export const Shows = () => {

  const showList =[
    {id:1,name:"Money Heist"},
    {id:2,name:"Berlin"},
    {id:3,name:"Breaking Bad"}
  ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Shows</h1>
        {
          showList.map((sh)=>{
            return <li>
              <Link to={`/watch/${sh.name}`}>{sh.name}</Link>
            </li>
          })
        }
    </div>
  )
}
