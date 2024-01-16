import React from 'react'

const Header = () => {
  return (
    <div className='d-flex justify-content-around'>
         <div >
        <h1>where in the world </h1>
        </div>
        <div className='mt-2 border-none'>
            <button className='border-0 bg-tranparent '>
            <p><i className="fa-solid fa-moon"></i>
                Mode Dark</p>
            </button>
        
        </div>
      
      
    </div>
  )
}

export default Header
