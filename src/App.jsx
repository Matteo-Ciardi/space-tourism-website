import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
