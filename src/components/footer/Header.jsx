import React from 'react'

const Header = ({header}) => {
  return (<>
    <div className='mb-1 text-xl font-semibold'>{header}</div>
    <div className="w-3/4 h-[2px] bg-primary mb-2"></div>
  </>
  )
}

export default Header