
function AdminPanel() {
    const logout = () =>{
        localStorage.removeItem("confirm")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("photo")
        window.location.reload()
    }
  return (
    <div>
        <button onClick={logout}>LogOut</button>
    </div>
  )
}

export default AdminPanel