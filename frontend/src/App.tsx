import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Client from "@/components/Clients/Client";
import Home from "@/components/Home";
import Vocal from "@/components/vocal";
import TablePage from "@/pages/table";
import Login from "@/pages/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="client" element={<Client />} />
          <Route path="vocal" element={<Vocal />} />
          <Route path="tables" element={<TablePage />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
