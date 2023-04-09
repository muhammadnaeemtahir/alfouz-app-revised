import { Link } from "react-router-dom";

const CSP = () => {
  return (
    <>
      <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
        <div className="row align-items-center g-0">
          <div className="col-md-1 col-2">
            <img
              src={require("../assets/icons/requests-icon.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <div className="col-md-11 col-10">
            <h1 className="fw-bold text-white mb-0">Requests</h1>
          </div>
        </div>
      </div>

      <div className="container p-md-5">
        <div className="bg-white rounded-4" style={{ minHeight: "30rem" }}>
          <div className="bg-gray rounded-4 p-2 mb-3">
            <h1>CSP Point Requests</h1>
          </div>
          <div className="container">
            <div className="row bg-info p-md-3 p-2 rounded-4 align-items-center mb-4">
              <div className="col-md-1">
                <div className="mb-md-0 mb-3 text-md-start text-center">
                  <img
                    src={require("../assets/icons/ngo-network.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="mb-md-0 mb-3">
                  <h3 className="text-md-start text-center mb-0">
                    Shahzaib Iqbal
                  </h3>
                  <small className="text-light">
                    Completed Flood Relief Project Organize by Edhi Foundation
                  </small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <Link
                        to="/admin-dashboard/grant-points"
                        className="btn btn-primary w-100"
                      >
                        Grant
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <Link
                        to="/admin-dashboard/view-requests"
                        className="btn btn-primary w-100"
                      >
                        Reject
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSP;
