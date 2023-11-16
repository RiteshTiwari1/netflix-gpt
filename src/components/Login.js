import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toogleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
        <Header/>

        <div className="absolute">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        />
        </div>

        <form className="w-4/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm && 
            (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>)}
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toogleSignInForm}>
            {isSignInForm ? "New to Netflix? Signup Now":"Already Registered? Sign In Now"}
                </p>
        </form>
    </div>
  )
}

export default Login;