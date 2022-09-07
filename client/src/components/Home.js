import React from 'react'
import Posts from './Posts'
import Form from './Form'
import "./styles/Home.css"
import Footer from './Footer'

const Home = () => {
  return (<>
    <div className='Home'>
    <div className='one'>
      <Form />
    </div>
      
      <div>     
      <Posts/>
      </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default Home
