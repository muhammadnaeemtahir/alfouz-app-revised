import { Link } from "react-router-dom";

const Grant = () => {
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

      <div className="col-md-6 col-11 mx-auto py-5">
        <div className="p-3 bg-white rounded-5 my-5">
          <p>Select Points:</p>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="row justify-content-evenly mb-3">
                <div className="col-4">
                  <div className="mb-3">
                    <button className="btn btn-primary p-4 w-100" value="50">
                      5
                    </button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mb-3">
                    <button className="btn btn-primary p-4 w-100" value="500">
                      10
                    </button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mb-3">
                    <button className="btn btn-primary p-4 w-100" value="1000">
                      20
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
                        placeholder="Enter points manually"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="text-center">
                        <Link
                          to=""
                          className="btn btn-primary w-50 text-uppercase"
                        >
                          Done
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

export default Grant;
