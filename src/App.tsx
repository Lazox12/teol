import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Upload from './pages/Upload/index'
import Search from './pages/Search/index'
import Checkout from './pages/Checkout/index'
import ProviderDashboard from './pages/ProviderDashboard/index'
import NavBar from './components/NavBar/index'

import { BookingProvider } from './context/BookingContext'

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="app">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/search" element={<Search />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/provider" element={<ProviderDashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </BookingProvider>
  )
}

export default App
