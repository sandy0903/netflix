import React, { useState,useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Form = ({title}) => {
    const newTitle=(title.replace("/",""))
    const navigate=useNavigate()
    const auth = getAuth(app);
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    useEffect(()=>{
        setEmail("")
        setPassword("")
    },[])
    const handleSignIn=(e)=>{
        e.preventDefault()
      signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const newUser = res.user;
      navigate("/home")
    })
    .catch((error) => {
      alert(error);
    });
    }
    const handleSignUp=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email,password)
      .then((res) => {
        const newUser=res.user;
        alert("Sign up successfull")
        navigate("/login")

      })
      .catch((error) => {
        alert(error);
      });
    }
  return (
    <div className='w-[90%] h-[500px] md:w-[430px] md:h-[650px] bg-[rgba(0,0,0,0.7)] absolute p-[2rem] md:p-[4rem] top-[57%] z-[10] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white '>
        <h1 className="text-3xl font-bold capitalize">{newTitle}</h1>
        <form onSubmit={newTitle=='login' ? handleSignIn : handleSignUp}>
            <input type="email" placeholder='Email hoặc số điện thoại' onChange={(e)=>setEmail(e.target.value)}  className="w-full rounded-md bg-slate-800 px-2 py-3 mb-2 mt-[2rem] text-slate-100 border-none outline-none"/>
            <br/>
            <input type="password" placeholder="Mật khẩu"  onChange={(e)=>setPassword(e.target.value)} className="w-full rounded-md bg-slate-800 px-2 py-3 mb-[2rem] mt-2 text-slate-100 border-none outline-none"/>
            <button type="submit" className="w-full bg-red-600 rounded-md px-2 py-3 capitalize" >{newTitle}</button>
            <input type="checkbox" checked={true} className="text-red bg-slate-500 mt-3"/><label>Remember me</label>
        </form>
        <p className="leading-sm text-slate-600 text-sm mt-[4rem]">Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot. Tìm hiểu thêm.</p>

    </div>
  )
}

export default Form