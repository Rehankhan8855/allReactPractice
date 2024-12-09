import React, { useState } from 'react'

function RandomNumber() {
    const [number , setNumber] = useState(0)

    const generateRandomNumber =() =>{
        const random = Math.floor(Math.random()*100)+1;
        setNumber(random)
    }
  return (
    <div>
        <h1>Random Number</h1>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      <p>Random Number is:{number}</p>
    </div>
  )
}

export default RandomNumber
