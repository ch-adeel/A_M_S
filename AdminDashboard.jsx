import React from 'react'
import admin from '../../assets/images/admin.png'
import Sidepanel from './Sidepanel'

const AdminDashboard = () => {
  return (
    <div className='flex bg-slate-300'>
      <Sidepanel/>
      <div className="flex-grow">
        <div className="mt-24 ml-6 text-xl text-center">
        Welcome back, Admin  
        </div>
        <div className=" flex justify-center mt-28">
        <img src={admin} alt="Admin-Vector-img" className="lg:w-96 lg:h-96" />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
