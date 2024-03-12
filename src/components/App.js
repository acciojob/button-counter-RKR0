
import { useState } from 'react';
import React from "react";
import './../styles/App.css';

const App = () => {

const [count, setCount] = useState(0);

    const increment  = ()=>{
      setCount(count+1)
    }

  return (
    <div>
        <p>Button clicked {count} times</p>
        <Button onClick={increment}>Click me</Button>
    </div>
  )
}

export default App
