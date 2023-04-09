import { Link } from "react-router-dom";

const BankAccountDetails = () => {
  const ProfileDetails = {
    Account: "UBL",
    title: "SHAHZAIB IQBAL",
    "Account Number": "923150743378",
    branch: "sk917317@gmail.com",
    phone: "+923150743378",
  };

  return (
    <>
      <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
        <div className="row align-items-center g-0">
          <div className="col-md-1 col-2">
            <img
              src={require("../assets/images/profile-pg.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <div className="col-md-11 col-10">
            <h1 className="fw-bold text-white mb-0">Banking Details</h1>
          </div>
        </div>
      </div>

      <div className="container px-md-5">
        <div className="row mb-3">
          <div className="col-md-2 ms-auto">
            <Link
              to="/ngo-dashboard/edit-bank-details"
              className="btn btn-primary w-100"
            >
              EDIT
            </Link>
          </div>
        </div>

        {Object.keys(ProfileDetails).map((key) => (
          <div className="row g-0 mb-3">
            <div className="col-md-3">
              <div className="border border-2 p-2 h-100">
                <p className="fw-bold text-white text-capitalize mb-0">
                  {key === "cnic" ? key.toUpperCase() : key}
                </p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="border border-2 p-2 h-100">
                <p className="text-white text-uppercase mb-0">
                  {ProfileDetails[key]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BankAccountDetails;
