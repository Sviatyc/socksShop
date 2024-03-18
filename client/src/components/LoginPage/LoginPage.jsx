import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_ADMINS } from "../../apollo/query"


function LoginPage() {
  const {data, loading, error} = useQuery(GET_ADMINS)
  const [users, setUsers] = useState([])
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=>{
    if(!loading){
      setUsers(data.getAdmins)
    }
  }, [data, loading, error])
  const searchAdmin = () =>{
    users.map(item =>{
      if(item.login === login || item.password === password){
        console.log('зайшло');
      }else{
        console.log('не зайшло');
      }

    })
  }
  return (
    <form className='w-[350px] h-[250px] bg-violet-300 rounded-[16px] m-auto flex flex-col gap-[20px] items-center mt-8'>
      <div className="mt-5">
        <p>login:</p>
        <input type="text" value={login} onChange={(e)=>setLogin(e.target.value)}/>
      </div>
      <div>
        <p>password:</p>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button className="w-[190px] h-[60px] rounded-[8px] bg-orange-300 hover:bg-orange-200" onClick={searchAdmin} type="button">confirm</button>
    </form>
  )
}

export default LoginPage
