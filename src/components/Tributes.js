import React from 'react'
import '../styles/Tributes.css'

const Tributes = () => {
  return (
    <div className='tributes'>
      <div className='tributes_text'>
            <h1>Tributes</h1>
            <b><a href='#'>See all &#8594;</a></b>
        </div>
        <p>World leaders pay tribute to Queen Elizabeth II</p>
        <div className='row3'>
            <div className='row3_row'>
                <div className='row3_image'>
                    <img src='./images/Rectangle 9.png' alt=''/>
                    <p>The story of modern Nigeria will never be complete without a chapter on Queen Elizabeth ll, a towering global personality and an outstanding leader. She dedicated her life to making her nation, the Commonwealth and the entire world a better place.”</p>
                </div>
                <div className='name'>
                    <h3>muhammadu Buhari</h3>
                    <p>President of Nigeria</p>
                </div>
            </div>
            <div className='row3_row'>
                <div className='row3_image'>
                    <img src='./images/Rectangle 4.png' alt=''/>
                    <p>“Her Majesty Queen Elizabeth II embodied the British nation’s continuity and unity for over 70 years. I remember her as a friend of France, a kind-hearted queen who has left a lasting impression on her country and her century.”</p>
                </div>
                <div className='name'>
                    <h3>Emmanuel Macron</h3>
                    <p>President of France</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tributes