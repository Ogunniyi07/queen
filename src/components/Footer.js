import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='line'>
          <hr/>
        </div>
        <div className='footer_text'>
            <img src='./images/logo.png' alt=''/>
            <h1>Queen Elizabeth alexandra mary windsor</h1>
            <p>Forever in our hearts 🕊<span className='red'>❤</span></p>
        </div>
    </div>
  )
}

export default Footer