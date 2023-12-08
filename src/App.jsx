import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Clientes from './components/clientes/Clientes.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Clientes />}/>
      </Routes>
    </Router>

  )
}

export default App