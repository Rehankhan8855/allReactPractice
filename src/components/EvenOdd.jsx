import React, { useState } from 'react'

const EvenOdd = () => {
    const [number , setNumber] = useState("");
    const [result , setResult] = useState("");

    const handleCheck =() =>{
       {number %2===0 ?setResult('Even'):setResult('Odd')}
    }
  return (
    <div>
        <h1>Even Odd Checker</h1>
      <input type='text' value={number}
      placeholder='Enter Number' 
      onChange={(e) =>setNumber(e.target.value)}/>

      <button onClick={handleCheck}>Check</button>
      <p>Result:{result}</p>
    </div>
  )
}

export default EvenOdd
