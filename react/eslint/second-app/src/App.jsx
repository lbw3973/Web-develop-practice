import { useState } from 'react'
import Board from './components/Board'
import Loading from './components/Loading'
import Test from './components/Test'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Timer s={10} />
      <Timer s={5} />
      <Timer s={3} />
    </div>
  )
}

export default App
