import { useMutation, useQuery } from "@apollo/client"
import { CREATE_ADMIN, GET_ADMINS } from "./apollo/query"
import { useEffect, useState } from "react"


function App() {
  const {data, loading, error} = useQuery(GET_ADMINS)
  const [newAdmin] = useMutation(CREATE_ADMIN)
  const [users, setUsers] = useState([])
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
    useEffect(()=>{
      if(!loading){
        if(!error){
          setUsers(data.getAdmins)
        }
      }
    }, [data, loading, error])

    const create_admin = () =>{
      newAdmin({
        variables: {
          input: {
            login, password
          }
        }
      }).then(()=>{
        setLogin('')
        setPassword('')
      })
    }

  return (
    <>
      <h1 className="ml-2 mt-4 border-2 border-pink-500 w-[150px]">СПИСОК АДМІНІВ</h1>
      <div className="flex flex-col">
        {users.map(item => {
          return <div key={item.id} className="ml-2 text-purple-500">{item.login}</div>
        })}
      </div>
      <div className="flex flex-col w-[200px] gap-[5px] ml-2">
        <h2>Добавити адміна</h2>
        <p>LOGIN</p>
        <input type="text" value={login} onChange={(e)=>setLogin(e.target.value)} className="border-2 border-black rounded-xl px-2"/> 
        <p>PASSWORD</p>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border-2 border-black rounded-xl px-2"/>
        <button onClick={create_admin} className="border-2 border-black rounded-[4px] mt-2">add admin</button>
      </div>
    </>
  )
}

export default App
