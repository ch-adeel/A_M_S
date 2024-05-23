import React from 'react'
import { Link } from 'react-router-dom'
const Feature = () => {
  return (
  <>
    <div className="bg-slate-300 h-screen w-full ">
    <nav className=" flex flex-col items-center justify-between bg-slate-700 py-2 shadow-dark-mild lg:flex-row lg:justify-between lg:py-4">
  <div className="flex flex-col w-full items-center lg:flex-row lg:items-center px-4 lg:justify-center">
    <div className="mx-8">
      <a className="text-xl text-white border-b-4 hover:text-yellow-200" href="#">A-M-S</a>
    </div>
  
    <div className="!visible lg:flex mt-2 flex-grow justify-center lg:mt-0  lg:basis-auto" id="">
      <ul className="list-none flex flex-col lg:flex-row lg:justify-center">
        <li className="my-4 lg:my-0 lg:ml-96 lg:mx-2 lg:pe-1">
          <a className="text-white hover:text-sky-500" href="/">Home</a>
        </li>
        <li className="my-4 lg:my-0 lg:mx-5 lg:pe-1">
          <Link className="text-white hover:text-sky-500" to="/Feature">Features</Link>
        </li>
        <li className="my-4 lg:my-0 lg:mx-5 lg:pe-1">
          <Link className="text-white hover:text-sky-500" to="/About">About</Link>
        </li>
        <li className="my-4 lg:my-0 lg:mx-5 lg:pl-96 lg:pe-1">
          <Link className="text-white hover:text-sky-500 hover:border-b-4 rounded-2xl hover:border-yellow-100" to="/Login">Sign in</Link>
        </li>
        <li className="my-4 lg:my-0 lg:mx-5 lg:pe-1">
          <Link className="text-white hover:text-sky-500 hover:border-b-4 rounded-2xl hover:border-yellow-100" to="/Signin">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div id="features" className="container mx-auto py-12 mt-2">

<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Features</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:ml-3 lg:mr-3 gap-8">

   
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Automated Attendance Tracking</h3>
            <p className="text-gray-600">Say goodbye to manual attendance registers. Our system automatically records attendance based on various inputs such as biometric scans, RFID cards, or online check-ins.</p>
        </div>
    </div>

   
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Real-Time Monitoring</h3>
            <p className="text-gray-600">Keep track of attendance in real-time. Monitor who's present, absent, or on leave instantly, allowing you to take prompt action when needed.</p>
        </div>
    </div>

    
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Customizable Reporting</h3>
            <p className="text-gray-600">Generate detailed reports tailored to your organization's needs. Analyze attendance trends, identify patterns, and make informed decisions to optimize workforce management.</p>
        </div>
    </div>
</div>
   
</div>
    </div>
  </>

  )
}

export default Feature
