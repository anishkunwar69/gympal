import React from 'react'

function ContentWrapper({children}) {
  return (
    <div className=' max-w-[1200px] mx-auto px-5'>
        {children}
    </div>
  )
}

export default ContentWrapper