import React, { useState } from "react";

function AddMultiple() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0)

const handleAdd =() =>{
    setResult(Number(num1)+Number(num2))
}
  return (
    <div>
    <h1>Add Multiple Number</h1>
<input type="number" value={num1} placeholder="Enter Number" onChange={(e) =>setNum1(e.target.value)}/>
<input type="number" value={num2} placeholder="Enter Number" onChange={(e) =>setNum2(e.target.value)}/>
<button onClick={handleAdd}>Add</button>
<p>Result: {result}</p>
  </div>
  )
}

export default AddMultiple;
