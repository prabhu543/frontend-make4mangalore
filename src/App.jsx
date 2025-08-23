
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Farmer from "./Pages/auth/Farmer";
import Logistic from "./Pages/auth/Logistic";
import Industry from "./Pages/auth/Industry";
import Signup from "./Pages/Signup";
import FarmerProfile from "./Pages/FarmerProfile";
import IndustryProfile from "./Pages/IndustryProfile";
import LogisticProfile from "./Pages/LogisticProfile";
import UserProfile from "./Pages/UserProfile";

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/logistic" element={<Logistic />} />


        <Route path="/farmer/profile" element={<FarmerProfile />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/industry/profile" element={<IndustryProfile />} />
        <Route path="/logistic/profile" element={<LogisticProfile />} />


      </Routes>
    </BrowserRouter>
  )
}