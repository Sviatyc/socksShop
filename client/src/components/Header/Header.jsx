import React from 'react'

function Header() {
  return (
    <header className='w-screen bg-violet-200 h-20 flex flex-row justify-between px-8'>
        <div className='flex items-center'>
            <p className='text-[20px] underline'>Socks Shop</p>
        </div>
        <div className='flex items-center'>
            <input type="text" placeholder='search'  className='h-9 rounded-[8px] p-3 text-[13px] w-[170px]'/>
        </div>
    </header>
  )
}

export default Header