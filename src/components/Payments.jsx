import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function Payments() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar/> 
        <div>
            hello
        </div>
      </div>
    </>
  )
}

export default Payments