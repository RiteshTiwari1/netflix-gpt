import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
  const navigate=useNavigate();
  const dispatch= useDispatch();
  const user=useSelector(store => store.user);
  // console.log(user);
  // console.log("hello");
  // const user="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
    
  }

  useEffect(()=>{
    
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        // console.log("inside Auth");
        if (user) {
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            
            navigate("/browse")
        } else {  
            dispatch(removeUser());
            navigate("/")
        }
    });  
    
    // unSubsribe when components unmount
    return () => unSubscribe();
    },[])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img 
        className="w-44"
        src={LOGO}
        alt="logo"/>


        {user && (
        <div className="flex p-2">
          <img className="w-12 h-12"
          alt="usericon" src= {user?.photoURL}/>
          <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
        </div>
        )}
    </div>
  )
}

export default Header