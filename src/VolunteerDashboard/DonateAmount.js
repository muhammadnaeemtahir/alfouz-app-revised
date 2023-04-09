import { Link } from "react-router-dom";

const DonateAmount = () => {
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
          <p>Select amount:</p>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="row justify-content-evenly mb-3">
                <div className="col-4">
                  <div className="mb-3">
                    <button className="btn btn-primary p-4 w-100" value="50">
                      50
                    </button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mb-3">
                    <button className="btn btn-primary p-4 w-100" value="500">
                      500
                    </button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mb-3">
                    <button className="btn btn-primary p-4 w-100" value="1000">
                      1000
                    </button>
                  </div>
                </div>
              </div>
              <div className="row g-0 justify-content-between align-items-center mb-3">
                <div className="col-5">
                  <hr />
                </div>
                <div className="col-2">
                  <div className="text-center">
                    <span className="fw-bold text-secondary">or</span>
                  </div>
                </div>
                <div className="col-5">
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-9 mx-auto">
                  <form action="" method="post">
                    <div className="mb-3">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control bg-light p-3"
                        placeholder="Enter amount manually"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="text-center">
                        <Link
                          to="/volunteer-dashboard/banking-details"
                          className="btn btn-primary w-50"
                        >
                          PROCEED
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateAmount;
