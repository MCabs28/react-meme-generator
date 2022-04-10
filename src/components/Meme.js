import React, {useState, useEffect} from 'react'
// import memesData from '../memesData'
import './Meme.css'

const Meme = () => {


const [meme, setMeme] = useState({
  topText: "",
  bottomText: "",
  randomImage: "http://i.imgflip.com/1bij.jpg"
})

const [allMemeImages, setAllMemeImages] = useState([])

// useEffect(() => {
//   fetch("https://api.imgflip.com/get_memes")
//       .then(res => res.json())
//       .then(data => setAllMemeImages(data.data.memes))
// }, []) ----PROMISE BASED .then


// ASYNC AWAIT BASED

useEffect(() => {
  async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemeImages(data.data.memes)
  }
  getMemes()
}, [])


const getImage = () =>{

  const randomMemes = Math.floor(Math.random() * allMemeImages.length)
  const url = allMemeImages[randomMemes].url
  setMeme(prevMeme =>({
    ...prevMeme,
    randomImage: url
  }))

}

function handleChange(event) {
  const {name, value} = event.target
  setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
  }))
}

  return (
    <>
      
      <div className='main'>

          <div className='form'>  

              <input type='text'
                 placeholder='Top Text'
                 className='form--input'
                 name="topText"
                 value={meme.topText}
                 onChange={handleChange}
               />
              <input type='text' 
                 placeholder='Bottom Text'
                 className='form--input'
                 name="bottomText"
                 value={meme.bottomText}
                 onChange={handleChange}
                 />
              <button className='btn-get-image' onClick={getImage}>Get a new image</button>

          </div>

          <div className="meme">
                <img src={meme.randomImage} className="memeImgStyle" alt="memeImage" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

         
      </div>

    </>
  )
}

export default Meme