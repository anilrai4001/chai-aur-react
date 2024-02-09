import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = ()=>{
    if(count==20)
      return;
    setCount(count+1);
  }
  const handleDecrease = ()=>{
    if(count==0)
      return;
    setCount(count-1)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handleIncrease}>increase</button>
      &nbsp;
      <button onClick={handleDecrease}>decrease</button>
      <footer>{count}</footer>
    </>
  )
}

export default App
