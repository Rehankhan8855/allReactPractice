import React, { useEffect, useState } from 'react'

function ApiDataFetching() {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
    },[])
  return (
    <div>
      <h1>Users List Api Data Fetch</h1>
      <ul>
        {users.map((user)=>(
            <li key={user.id}>{user.name}<br /> {user.address.zipcode} <br />{user.email}</li>
        
        ))}
         
      </ul>
    
    </div>
  )
}

export default ApiDataFetching