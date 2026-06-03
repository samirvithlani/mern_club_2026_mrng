import React from 'react'
import { Link } from 'react-router-dom'

export const Movis = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Movies</h1>
        <ul>
          <li>
            <Link to="/watch/Dhurandhar">Dhurandhar</Link>
          </li>
          <li>
            <Link to="/watch/Toxic">Toxic</Link>
          </li>
          <li>
            <Link to="/watch/Dharpakad">Dharpakad</Link>
          </li>
        </ul>
    </div>
  )
}
