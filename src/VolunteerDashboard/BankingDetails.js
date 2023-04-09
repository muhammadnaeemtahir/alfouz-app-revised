import { Link } from "react-router-dom";

const BankingDetails = () => {
  return (
    <>
      <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
        <div className="row align-items-center g-0">
          <div className="col-md-1 col-2">
            <img
              src={require("../assets/images/all-projects-pg.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <div className="col-md-11 col-10">
            <h1 className="fw-bold text-white mb-0">Your Projects</h1>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-11 mx-auto py-5">
        <div className="p-3 bg-white rounded-5 my-5">
          <div className="text-center mb-2">
            <img
              src={require("../assets/images/ubl-logo.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <p className="">Send amount to here:</p>
          <div className="row">
            <div className="col-4">
              <p>
                <span className="fw-bold h5 text-secondary">
                  Account Title:{" "}
                </span>
              </p>
            </div>
            <div className="col-8">
              <p className="text-muted">SHAHZAIB IQBAL</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <p>
                <span className="fw-bold h5 text-secondary">Account No: </span>
              </p>
            </div>
            <div className="col-8">
              <p className="text-muted">272599781</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <p>
                <span className="fw-bold h5 text-secondary">Branch Code: </span>
              </p>
            </div>
            <div className="col-8">
              <p className="text-muted">0312</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <p>
                <span className="fw-bold h5 text-secondary">Bank Name: </span>
              </p>
            </div>
            <div className="col-8">
              <p className="text-muted">united bank limited</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <p>
                <span className="fw-bold h5 text-secondary">IBAN No: </span>
              </p>
            </div>
            <div className="col-8">
              <p className="text-muted">PK0002725997810</p>
            </div>
            <div className="col-md-4 mx-auto">
              <div className="mt-3">
                <Link
                  to="/volunteer-dashboard/successful-payment"
                  className="btn btn-primary w-100"
                >
                  Done
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankingDetails;
