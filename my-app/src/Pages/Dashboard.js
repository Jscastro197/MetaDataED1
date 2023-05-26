import React from 'react'
import './Dashboard.css'
import { Bargraph } from '../components/Bargraph'

const Dashboard = () => {
  return (
    <div>
    <h1 className="text-3xl font-bold underline">
      <Bargraph/>
    </h1>
      
    </div>
  )
}

export default Dashboard
