import React from 'react'
import "../styles/Banner.css"

const Banner = () => {
  return (
    <div className='banner'>
        <div className='text'>
        <img src='./images/logo.png' alt=''/>
            <div className='center'>
                <h1>Queen Elizabeth II</h1>
                <p>"I have in sincerity pledged myself to your service, as so many of you <br/>are pledged to mine. Throughout all my life and with all my heart I shall strive to be worthy of your trust."</p>
            </div>
            <div className='left'>
                <p><span className='left_one'>- Queen Elizabeth Alexandra Mary Windsor</span></p>
                <p><span className='left_two'>21 April 1926 - 8 September 2022</span></p>
            </div>
        </div>
        <div className='image'>
            <img src='./images/queen.png' alt=''/>
        </div>
    </div>
  )
}

export default Banner