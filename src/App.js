import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import {BASE_URL, API_KEY} from './index'

function App() {

  const [ imageObj , setImageObj ] = useState([])
  // const [ description, setDescription ] = useState(null)
  // const [ imgURL, setImgURL ] = useState('')
  // const [ date, setDate ] = useState('')

  useEffect(() => {
    axios.get(`${BASE_URL}_key=${API_KEY}`)
    .then(good =>{
      setImageObj(good.data)

      // setDescription(good.data.explanation)
      // setImgURL(good.data.url)
      // console.log(good)
      // setDate(good.data.date)
    })
    .catch(bad => {
      console.log(bad)
      debugger
    })
  }, [])

  console.log(imageObj)

  return (
    <body>
      <div className="App">
      
        <header>

          <h1>NASA photo of the day!</h1>
          <h2>{imageObj.title}</h2>
          <h4>Date: {imageObj.date}</h4>

        </header>

        <img src={imageObj.url} alt = 'random space'/>
        <h3>{imageObj.explanation}</h3>
      
      
      </div>
    </body>
  );
}



export default App;
