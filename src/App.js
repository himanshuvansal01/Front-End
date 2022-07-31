import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  return (
  <>
  <button type="button" 
  onClick={() => setValue("Hello World!")}
    >
    Break the world
    </button>

    <h1>{value}</h1>
    </>
    )
    
}

export default App;

