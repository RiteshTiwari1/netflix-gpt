import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidate } from '../utils/validate';
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
    
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    
    const dispatch = useDispatch();
    const toogleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };
    // console.log(errorMessage);
    const handleButtonClick=()=>{
        const message = checkValidate(email.current.value,password.current.value);
        // console.log(email.current.value);
        // console.log(password.current.value);
        setErrorMessage(message);
        // console.log(message);

        if(message) return;
        
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            
            .then((userCredential) => {
                
                const user = userCredential.user;
                // console.log(user);
                updateProfile(user, {
                    displayName: name.current.value , photoURL:"https://avatars.githubusercontent.com/u/94172561?v=4",
                  }).then(() => {
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                    // console.log(user);
                    // navigate("/browse");
                  }).catch((error) => {
                    setErrorMessage(error.message)
                  });


                // console.log(user);
                // navigate('./browse');
                // console.log("123bvc");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+" "+errorMessage);
            });
            // {console.log(name.current.value)}
        }else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    // navigate('./browse');
                    // console.log("hellodasdas");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+" "+errorMessage);
                });
        }
    }
  return (
    <div>
        <Header/>

        <div className="absolute">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        />
        </div>

        <form 
        onSubmit={(e)=> e.preventDefault()} className="w-4/12 absolute p-12 bg-black my-10 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm && 
            
            <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>
            
            }
            <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
            <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                {isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toogleSignInForm}>
            {isSignInForm ? "New to Netflix? Signup Now":"Already Registered? Sign In Now"}
                </p>
        </form>
    </div>
  )
}

export default Login;