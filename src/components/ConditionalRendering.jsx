import React, { useState } from 'react'

function ConditionalRendering() {
    const [isLoggedIn , setIsLoggedIn] =useState(false)
  return (
    <div>
      <h2>Conditional Rendering</h2>
      
   {isLoggedIn ? <h1>Welcome BAck!</h1>:<button onClick={()=>setIsLoggedIn(true)}>Log in</button>}
      
    </div>
  )
}

export default ConditionalRendering
