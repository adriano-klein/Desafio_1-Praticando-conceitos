import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { TodoInput } from './components/TodoInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <TodoInput />
    </div>
  )
}

export default App
