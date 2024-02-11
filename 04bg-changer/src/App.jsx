import { useState } from "react"

function App() {

  const [color,setColor] = useState('lavender');

  return (
    <div className="w-full h-screen flex flex-col justify-end items-center duration-1000" style={{backgroundColor: color}}>
      <div className="flex flex-row justify-center rounded-full px-4 py-2 bg-white fixed bottom-10 l-0 r-0 gap-2">
        <button onClick={()=>setColor('red')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'red'}}>Red</button>
        <button onClick={()=>setColor('blue')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'blue'}}>Blue</button>
        <button onClick={()=>setColor('black')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'black'}}>Black</button>
        <button onClick={()=>setColor('olive')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'olive'}}>Olive</button>
        <button onClick={()=>setColor('lavender')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'lavender'}}>Lavender</button>
        <button onClick={()=>setColor('pink')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'pink'}}>Pink</button>
        <button onClick={()=>setColor('green')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'green'}}>Green</button>
        <button onClick={()=>setColor('yellow')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'yellow'}}>Yellow</button>
        <button onClick={()=>setColor('orange')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'orange'}}>Orange</button>
        <button onClick={()=>setColor('brown')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'brown'}}>Brown</button>
        <button onClick={()=>setColor('grey')} className="outline-none text-white rounded-full px-4 py-2" style={{backgroundColor: 'grey'}}>Grey</button>
      </div>
    </div>
  )
}

export default App
