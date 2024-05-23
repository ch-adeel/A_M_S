import React from 'react'
import { Link } from 'react-router-dom'
import video from '../assets/images/video.mp4'
// import home from '../assets/images/Home.png'

const Home = () => {
  return (
   <>
   <div className="">
  <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
    <source src={video} type="video/mp4" />
   </video>
<nav className="relative flex flex-col items-center justify-between bg-slate-700 py-2 shadow-dark-mild lg:flex-row lg:justify-between lg:py-4 rounded-3xl lg:ml-5 lg:mr-5 lg:mt-3">
  <div className="flex flex-col w-full items-center lg:flex-row lg:items-center px-4 lg:justify-center">
    <div className="mx-8">
      <a className="text-xl text-white border-b-4 hover:text-yellow-200" href="/">A-M-S</a>
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
</div>


   
</>

  );
}
export default Home
