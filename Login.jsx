import React from 'react'
import desktop from '../assets/images/desktop.png'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


const Login = () => {
  const {
    register,
    handleSubmit,
       formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
      <div className=" flex flex-col justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  bg-slate-300 ">
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
     <div className='flex h-screen'>           
     <div className="h-full">
    <div className="flex h-full flex-wrap items-center justify-center lg:justify-between ">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 ">
            <img src={desktop} className="w-full" alt="Sample image" />
        </div>
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <div className="relative mb-6">
             <input type="email" className="block min-h-[auto] w-full rounded border border-slate-600 hover:border-b-4 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black placeholder-text-neutral-300" placeholder="Email address / Username" {...register("email", { required: true })}/>
             {errors.email && <span className="text-red-500">This field is required</span>}
             <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                </div>
            <div className="relative mb-6">
            <input type="password" className="block min-h-[auto] w-full rounded border border-slate-600 hover:border-b-4 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black placeholder-text-neutral-300" placeholder="Password" {...register("password", { required: true })}/>
            {errors.password && <span className="text-red-500">This field is required</span>}
            <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
            </div>

                <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] flex items-center">
                <input className="mr-2 border-0 outline-none" type="checkbox" />
                 <label className="hover:cursor-pointer">Remember me</label>
                </div>
                    <a href="#!" className="hover:underline">Forgot password?</a>
                </div>
                <div className="text-center lg:text-left">
                    <button type="submit" className="inline-block w-full rounded bg-blue-600 hover:bg-blue-800 px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" data-twe-ripple-init data-twe-ripple-color="light">
                      {/* <Link to="/AdminDashboard"> */}
                        Login
                      {/* </Link> */}
                    </button>
                    <p className=" mb-0 mt-2 pt-1 text-sm font-semibold">
                        Don't have an account?
                        <Link to="/Signin" className="text-red-800 hover:underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 mx-2 ">Register</Link>
                    </p>
                </div>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>     
  )
}

export default Login
