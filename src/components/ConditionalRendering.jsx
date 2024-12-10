import React, { useState } from 'react'

function ConditionalRendering() {
    const [isLoggedIn , setIsLoggedIn] =useState(false)
  return (
    <div>
      <h2>Conditional Rendering</h2>
      
   {isLoggedIn ? (
    <div>
      <h1>Welcome BAck!</h1>
      <button onClick={() =>setIsLoggedIn(false)}>Log Out</button>
    </div>
   ):(
    <button onClick={() =>setIsLoggedIn(true)}>Log In</button>
   )}
      
    </div>
  )
}

export default ConditionalRendering
