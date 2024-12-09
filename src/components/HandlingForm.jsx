import React, { useState } from "react";

export default function HandlingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = () => {
    setData({ name, email });
  };
  return (
    <div>
      <h1>Handling Form</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
      {setData.name && (
        <p>
          Name:{data.name},Email:{data.email}
        </p>
      )}
    </div>
  );
}
