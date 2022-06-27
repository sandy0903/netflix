import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import logo from "../images/netflix_PNG32.png";

import Form from "../components/Form"

import { useLocation } from 'react-router-dom';
const Login = () => {
  const [title, setTitle]=useState("")
  const param=useLocation()

  useEffect(()=>{
    setTitle(param.pathname)

  },[param.pathname])

  return (
    <div className='bg-black h-auto overflow-hidden '>
    <nav className="container mx-auto flex items-center justify-between h-[90px] ">
      <div className="w-[130px] sm:w-[200px] z-[100] ">
          <Link to="/"><img src={logo} className="" /></Link>
        </div>
    </nav>
    <Hero text={false} borderBottom={false} />
    <Form title={title}/>
    <Footer bgColor={"absolute bottom-[-500px] z-[100] left-0 right-0 sm:w-[100%] bg-black opacity-[0.7] px-[3rem] py-[2rem]"}/>

    </div>

  )
}

export default Login