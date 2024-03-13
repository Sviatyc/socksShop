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
      <h1>СПИСОК АДМІНІВ</h1>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {users.map(item => {
          return <div key={item.id}>{item.login}</div>
        })}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', width: '300px', gap: '5px'}}>
        <h2>Добавити адміна</h2>
        <input type="text" value={login} onChange={(e)=>setLogin(e.target.value)}/> LOGIN
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/> PASSWORD
        <button onClick={create_admin}>add admin</button>
      </div>
    </>
  )
}

export default App
