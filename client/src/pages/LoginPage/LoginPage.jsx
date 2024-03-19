import { sightByEmailAndPassword, signInWithGoogle } from "../../firebase.jsx"
import GoogleButton from 'react-google-button'
import { useState } from 'react'
import { Navigate } from "react-router-dom"


const LoginPage = ()=>{
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  return(
    <div className="w-[300px] h-[330px] rounded-[12px] m-auto flex justify-center items-center flex-col gap-3 border-2 mt-[200px] relative">
      <h1 className="text-[23px]">Log in Admin</h1>
      <GoogleButton type="light" onClick={signInWithGoogle} className="mt-[5px]" />
      <div>
        <p className="
          relative
          after:content-['']
          after:w-[100px]
          after:h-[1px]
          after:bg-gray-400
          after:absolute 
          after:top-[15px]
          after:left-[20px]
          before:content-['']
          before:w-[100px]
          before:h-[1px]
          before:bg-gray-400
          before:absolute 
          before:top-[15px]
          before:right-[20px]
              ">or</p>
      </div>
      <input value={userEmail} onChange={(event)=>setUserEmail(event.target.value)} type="email" placeholder="Email adress" className="focus:border-transparent focus:outline-none px-2 border-b-2" />
      <input value={userPassword} onChange={(event)=>setUserPassword(event.target.value)} type="password" placeholder="Password" className="focus:border-transparent focus:outline-none px-2 border-b-2 mt-2" />
      {!localStorage.getItem("confirm") ? <></> : <p className="text-[11px] text-red-500 absolute top-[245px]">Invalid login or password</p>}
      <button onClick={()=>{sightByEmailAndPassword(userEmail, userPassword), <Navigate to="/admin"/>}} className="w-[90px] h-[35px] bg-blue-500 rounded-[8px] text-white mt-5 hover:bg-blue-400">Log in</button>
    </div>
  )
}

export default LoginPage
