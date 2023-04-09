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

import { Routes, Route } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <div className="container-fluid g-0" style={{ minHeight: "100dvh" }}>
        <div className="row g-0" style={{ minHeight: "100dvh" }}>
          <div className="col-md-3 d-md-block d-none">
            <Navbar />
          </div>

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
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
