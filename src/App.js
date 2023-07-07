import React, { useState } from 'react'
import './App.css';

function App() {

const [name, setName] = useState('')

const [submitted, setSubmitted] = useState(false)

const handleChange = (e) => {
  setName(e.target.value)
}

const handleSubmit = () => {
  setSubmitted(true)
  e.preventDefault
}
  return (
    <div className="App">
      <h1>Welcome to My Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      <button type='submit'>Submit</button>
      </form>
      {submitted && (
        <h3>Thank you {name}</h3>
      )}
    </div>
  );
}

export default App;
