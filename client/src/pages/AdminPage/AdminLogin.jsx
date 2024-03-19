import {signInWithGoogle} from "../../firebase.jsx"
import GoogleButton from 'react-google-button'


function AdminLogin() {
  return (
    <div className="w-[300px] h-[150px] rounded-[12px] m-auto flex justify-center items-center flex-col gap-3 border-2 mt-[200px]">
      <h1>Sign in Admin panel</h1>
      <GoogleButton type="light" onClick={signInWithGoogle}/>
    </div>
  )
}

export default AdminLogin
