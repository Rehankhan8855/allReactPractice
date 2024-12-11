import React, { useState } from 'react'

function SortList() {
    const [itemss, setItem] = useState(["Banana", "Apple", "Cherry", "Date"])

    const sortAscending =()=>{
        const sorted = [...itemss].sort()
        setItem(sorted)
    }
    const sortDescending =()=>{
        const sorted = [...itemss].sort().reverse()
        setItem(sorted)
    }
  return (
    <div>
      <h1>Sort List</h1>
      <button onClick={sortAscending}>Sort Ascending</button>
      <button onClick={sortDescending}>Sort Descending</button>

      <ul>
        {itemss.map((itemi,index)=>(
            <li key={index}>{itemi}</li>
        ))}
      </ul>
    </div>
  )
}

export default SortList
