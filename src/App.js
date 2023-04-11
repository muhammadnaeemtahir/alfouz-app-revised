import { Routes, Route } from "react-router-dom";

// components
import GuestUser from "./components/GuestUser";
import Logins from "./components/Logins";
import JoinUs from "./components/JoinUs";
import Admin from "./components/LoginForms/Admin";
import NGO from "./components/LoginForms/NGO";
import Volunteer from "./components/LoginForms/Volunteer";
import RegisterNGO from "./components/RegisterationForms/NGO";
import VolunteerNGO from "./components/RegisterationForms/Volunteer";
import NGODashboard from "./NGODashboard/NGODashboard";
import VolunteerDashboard from "./VolunteerDashboard/VolunteerDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestUser />} />
        <Route path="/logins" element={<Logins />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/admin-login" element={<Admin />} />
        <Route path="/ngo-login" element={<NGO />} />
        <Route path="/ngo-register" element={<RegisterNGO />} />
        <Route path="/volunteer-register" element={<VolunteerNGO />} />
        <Route path="/volunteer-login" element={<Volunteer />} />
        <Route path="/ngo-dashboard/*" element={<NGODashboard />} />
        <Route path="/volunteer-dashboard/*" element={<VolunteerDashboard />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
