
export default function AdminPage(){
    const logout = () =>{
        localStorage.removeItem("confirm")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("photo")
        window.location.reload()
    }
    return(
        <div>
        <header className="flex flex-row justify-between px-[100px] pt-[10px] items-center">
            <div className="flex flex-row gap-2">
                {localStorage.getItem("photo") === 'null' ? <div className="w-[60px] h-[60px] rounded-[100%] bg-yellow-500 flex items-center justify-center text-[40px] font-bold uppercase text-white">{localStorage.getItem("email").split('')[0]}</div> : <img src={localStorage.getItem("photo")} alt="icon" className="w-[60px] h-[60px] rounded-[100%]"/>}
                <div className="flex justify-center flex-col items-start">
                    {localStorage.getItem("name") === 'null' ? <></> : <p className="font-bold">{localStorage.getItem("name")}</p>}
                    <p className={localStorage.getItem("name") === 'null' ? "font-bold" : "text-[14px]"}>{localStorage.getItem("email")}</p>
                </div>
            </div>
            <button onClick={logout} className="hover:underline h-[30px]">Log Out</button>
        </header>
    </div>
    )
}

