import React, { useState } from 'react'

function CharacterCounter() {
    const [textCount , setTextCount] = useState("")
  return (
    <div>
        <h1>Character Counter</h1>
      <input type='text' value={textCount} placeholder='Enter Character' onChange={(e) => setTextCount(e.target.value)}/>
      <p>Character Count:{textCount.length}</p>

    </div>
  )
}

export default CharacterCounter
