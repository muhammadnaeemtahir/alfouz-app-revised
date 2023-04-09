// components
import Header from "./Header";
import Navbar from "./Navbar";
import NGOIndex from "./NGOIndex";
import MyProfile from "./MyProfile";
import EditProfile from "./EditProfile";
import Volunteers from "./Volunteers";
import AllProjects from "./AllProjects";
import EditBankDetails from "./EditBankDetails";
import BankAccountDetails from "./BankAccountDetails";
import AddProject from "./AddProject";
import Awards from "./Awards";
import Support from "./Support";
import ChatWithAdmin from "./ChatWithAdmin";
import NGOProfile from "./NGOProfile";

import { Routes, Route, useLocation } from "react-router-dom";

const NGODashboard = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <>
      <Header />
      <div className="container-fluid g-0" style={{ minHeight: "100dvh" }}>
        <div className="row g-0" style={{ minHeight: "100dvh" }}>
          {currentRoute !== "/ngo-dashboard/ngo-profile" && (
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
                <Route path="/" element={<NGOIndex />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/all-projects" element={<AllProjects />} />
                <Route path="/add-project" element={<AddProject />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/volunteers" element={<Volunteers />} />
                <Route path="/bank-account-details" element={<BankAccountDetails />}/>
                <Route path="/edit-bank-details" element={<EditBankDetails />}/>
                <Route path="/awards" element={<Awards />} />
                <Route path="/support" element={<Support />} />
                <Route path="/chat-with-admin" element={<ChatWithAdmin />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default NGODashboard;
