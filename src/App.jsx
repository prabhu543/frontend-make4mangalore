
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Farmer from "./Pages/Farmer";
import Industry from "./Pages/Industry";

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/industry" element={<Industry />} />
      </Routes>
    </BrowserRouter>
  )
}