import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <div className='mt-8'>
      <h1 className='text-3xl'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App