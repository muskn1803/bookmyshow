import React from 'react'

const MovielayoutHoc = 
(Component) => 
({...props}) => {
  return (
    <div>
        <MovieNavbar />
        <Component {...props} />
        <div>Footer</div>
    </div>
  )
}

export default MovielayoutHoc;