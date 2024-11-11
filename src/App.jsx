import { useState } from 'react'
import './App.css'
import Dashbord from './pages/Dashbord'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Dashbord />

    </>
  )
}

export default App
