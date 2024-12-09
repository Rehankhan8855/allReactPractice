import React, { useState } from 'react'

function PalindromeChecker() {
    const [text , setText] = useState("")
    const [resultIs , setResultIs] = useState("")

    const handleCheck =()=>{
        const reverseText =text.split('').reverse().join('');
       {text === reverseText ?setResultIs('Its a Palindrome!') : setResultIs('Not a Palindrome')}
    }
  return (
    <div>
        <h1>Palindrome Checker</h1>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text'/>
      <button onClick={handleCheck}>Check</button>
      <p>Result is: {resultIs}</p>
    </div>
  )
}

export default PalindromeChecker
