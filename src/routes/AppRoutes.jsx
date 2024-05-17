import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home"
import { Setting } from "../pages/Setting";
import  Consultation  from "../pages/Home/components/Consultation";
import  NewConsultation from "../pages/Home/components/NewConsultation"
import PageHome from "../pages/Home/components/PageHome";
import EditConsultation from "../pages/Home/components/Consultation/editConsultation"
import  NewPet from "../pages/Home/components/NewPet"
import Exercise from "../pages/Home/components/Exercise"
import Nutrition from "../pages/Home/components/Nutrition";
import Client from "../pages/Home/components/ListClient/client";
import NewClientVet from "../pages/Home/components/ListClient/newClientVet";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/pageHome" element={<PageHome/>} />
        <Route path="/consultation" element={<Consultation/>} />
        <Route path="/editconsultation" element={<EditConsultation/>} />
        <Route path="/newconsultation" element={<NewConsultation/>} />
        <Route path="/client" element={<Client/>} />
        <Route path="/newpet" element={<NewPet/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/exercise" element={<Exercise/>} />
        <Route path="/nutrition" element={<Nutrition/>} />
        <Route path="/newClientVet" element={<NewClientVet/>} />
      </Routes>
    </BrowserRouter>
  );
}