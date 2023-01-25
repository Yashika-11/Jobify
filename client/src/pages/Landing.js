import React from 'react'
import Logo from '../components/logo.js'
import Main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'

import Wrapper from '../assets/wrappers/LandingPage.js'
const Landing = () => {
  return (
    <Wrapper>
    <nav>
     <Logo/>
     
    </nav>
    <div className='container-page'>
      <div className='info'>
      <h1>
      Job <span> Tracking </span> App
        
      </h1>
      <p>
        This is a job tracking app which helps user to login register 
        and track their application for which they opted upto what stage 
        it has passed whether rejected or application still under process
      </p>
      <Link to='/register' className='btn btn-hero'>Register/Login</Link>
      </div>
      <img src={Main} alt="job-hunt" className='img main-img'></img>
      
    </div>

    </Wrapper>
  );
}


export default Landing