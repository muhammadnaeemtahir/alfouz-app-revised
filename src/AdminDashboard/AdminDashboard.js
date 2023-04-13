// components
import Header from "./Header";
import Navbar from "./Navbar";
import AdminIndex from "./AdminIndex";
import Customization from "./Customization";
import FAQ from "./FAQ";
import Chats from "./Chats";
import NGOChats from "./NGOChats";
import Chat from "./Chat";
import Volunteers from "./Volunteers";
import Requests from "./Requests";
import ViewRequests from "./ViewRequests";
import CSP from "./CSP";
import Grant from "./Grant";
import NGOs from "./NGOs";
import AllProjects from "./AllProjects";
import AddProjects from "./AddProject";
import NGOProfile from "../NGODashboard/NGOProfile";

import { Routes, Route, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <>
      <Header />
      <div className="container-fluid g-0" style={{ minHeight: "100dvh" }}>
        <div className="row g-0" style={{ minHeight: "100dvh" }}>
          {currentRoute !== "/admin-dashboard/ngo-profile" && (
            <div className="col-md-3 d-md-block d-none">
              <Navbar />
            </div>
          )}

          <Routes>
            <Route path="/ngo-profile" element={<NGOProfile />} />
          </Routes>

          <div className="col-md-9">
            <main className="">
              <Routes>
                <Route path="/" element={<AdminIndex />} />
                <Route path="/customization" element={<Customization />} />
                <Route path="/add-faq" element={<FAQ />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/ngo-chats" element={<NGOChats />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/volunteers" element={<Volunteers />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/view-requests" element={<ViewRequests />} />
                <Route path="/csp-requests" element={<CSP />} />
                <Route path="/grant-points" element={<Grant />} />
                <Route path="/ngos" element={<NGOs />} />
                <Route path="/all-projects" element={<AllProjects />} />
                <Route path="/add-projects" element={<AddProjects />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
