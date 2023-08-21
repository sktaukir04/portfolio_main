import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0a192f] text-slate-50 flex justify-center'>
        <p>Copyright &copy; Shaikh Taukir - {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer