import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import Client from './Component/Clients/Client';

import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="client" element={<Client />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
