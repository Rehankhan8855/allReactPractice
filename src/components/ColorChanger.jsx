import React, { useState } from 'react'

function ColorChanger() {
    const [bgColor, setBgColor] = useState("white");

   const onChanger =()=>{
    const changeRandom = `#${Math.floor(Math.random() *167772145).toString(16)}`;
    setBgColor(changeRandom)
   }
  return (
    <div  style={{ backgroundColor: bgColor, height: "50vh" }}>
      <button onClick={onChanger}>Change Background Color</button>
    </div>
  )
}

export default ColorChanger
