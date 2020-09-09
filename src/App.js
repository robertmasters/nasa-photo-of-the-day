import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import {BASE_URL, API_KEY} from './index'
import Title from "./components/Title";
import MainDisplay from "./components/MainDisplay";

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

        <Title details = {imageObj} />

        </header>
        {/* */}
        <MainDisplay details = {imageObj} />
      
      
      </div>
    </body>
  );
}



export default App;
