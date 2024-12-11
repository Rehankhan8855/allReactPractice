import React, { useState } from 'react'

function FilterList() {
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    const [search, setSearch] = useState("");

    const filteredItems =items.filter((item)=>
        item.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div>
        <h1>Filter List</h1>
        <input type='text' value={search} placeholder='Search Item' onChange={(e) =>setSearch(e.target.value)}/>
      
        <ul>
            {filteredItems.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default FilterList
