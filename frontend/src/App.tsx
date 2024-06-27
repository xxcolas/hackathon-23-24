// @ts-ignore
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Client from "@/pages/client"
import TablePage from "@/pages/table"
import Login from "@/pages/login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="client" element={<Client />} />
          <Route path="tables" element={<TablePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
