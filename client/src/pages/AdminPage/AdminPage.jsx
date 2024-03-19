import AdminLogin from './AdminLogin'
import AdminPanel from './AdminPanel'

export default function AdminPage(){
    
    return(
        <div>
            {!localStorage.getItem("confirm") ? <AdminLogin/> : <AdminPanel />}
        </div>
    )
}

