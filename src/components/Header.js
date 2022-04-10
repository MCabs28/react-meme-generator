import React from 'react'
import MemeImg from '../images/meme.png'
import './Header.css'

const Header = () => {
  return (
    <>  
        <div className='header'>

            <div className='brand'>
                    <img src={MemeImg} alt='meme face'  className='memeImg'/>
                    <h1>Meme Generator</h1>
            </div>

        
            <ul className='nav'>
                <li> <a href="...">Home</a></li>
                <li> <a href="...">About</a></li>
                <li> <a href="...">Services</a></li>
            </ul>
       

        </div> {/* End of header */}

    </>
  )
}

export default Header