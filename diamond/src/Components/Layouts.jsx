import React from 'react'
import Headers from './Headers'
import Footer from './Footer'


const Layouts = ({children}) => {
  return (
    <>
        <Headers/>
       <div>{children}</div>
       <Footer/>
      {/* <h1>Layout</h1> */}
    </>
  )
}



export default Layouts
