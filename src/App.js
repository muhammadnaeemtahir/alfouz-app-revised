import { Routes, Route } from "react-router-dom";

// components
import GuestUser from "./components/GuestUser";
import NGODashboard from "./NGODashboard/NGODashboard";
import VolunteerDashboard from "./VolunteerDashboard/VolunteerDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestUser />} />
        <Route path="/ngo-dashboard/*" element={<NGODashboard />} />
        <Route path="/volunteer-dashboard/*" element={<VolunteerDashboard />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
