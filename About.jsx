import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-slate-300 w-full h-screen"> 
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

       <div class="container mx-auto py-12">

<h1 class="text-4xl font-bold text-center text-gray-800 mb-6">About</h1>

<div class="max-w-3xl mx-auto">

    <p class="text-lg text-gray-600 mb-6">
        A-M-S was founded with a vision to revolutionize attendance tracking and management for businesses worldwide. Our team of experts brings together years of experience in software development and HR management to deliver a solution that simplifies the complexities of attendance management.
    </p>

    <p class="text-lg text-gray-600 mb-6">
        We understand the challenges organizations face in managing attendance efficiently, which is why we've developed a comprehensive solution that addresses these pain points head-on. By combining cutting-edge technology with intuitive design, we empower organizations to optimize their workforce management processes and achieve greater productivity and efficiency.
    </p>

    <p class="text-lg text-gray-600 mb-6">
        At A-M-S, we're committed to excellence, innovation, and customer satisfaction. We strive to continuously enhance our product and support our clients on their journey towards digital transformation.
    </p>

    <p class="text-lg text-gray-600">
        Join us in redefining attendance management for the modern workplace. Experience the difference with A-M-S.
    </p>

</div>

</div>
    </div>
  )
}

export default About
