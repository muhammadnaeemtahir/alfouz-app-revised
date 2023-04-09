import { Link } from "react-router-dom";

const RequestInsentive = () => {
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
        <div className="py-md-5 py-3 bg-white rounded-5 my-5">
          <p className="text-dark ms-2">Send one request or both!</p>
          <div className="bg-success p-3 rounded-3 mb-3">
            <div className="row">
              <div className="col-md-6">
                <h4>E-Certificate</h4>
              </div>
              <div className="col-md-4 ms-auto">
                <button className="btn btn-primary w-100">SEND REQUEST</button>
              </div>
            </div>
          </div>
          <div className="bg-success p-3 rounded-3 mb-5">
            <div className="row">
              <div className="col-md-6">
                <h4>CSP Hours (Points)</h4>
              </div>
              <div className="col-md-4 ms-auto">
                <button className="btn btn-primary w-100">SEND REQUEST</button>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary w-25"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Done
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-sm modal-dialog-centered">
                <div className="modal-content ">
                  <div className="modal-header border-0">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="text-center fw-bold">
                      How many stars would you like to give to this NGO?
                    </p>
                    <div className="text-center mb-3">
                      <small className="text-center text-secondary">
                        Tap a star to rate the NGO Project.
                      </small>
                    </div>
                    <div className="text-center">
                      <i className="fa-regular fa-star text-primary mx-1"></i>
                      <i className="fa-regular fa-star text-primary mx-1"></i>
                      <i className="fa-regular fa-star text-primary mx-1"></i>
                      <i className="fa-regular fa-star text-primary mx-1"></i>
                      <i className="fa-regular fa-star text-primary mx-1"></i>
                    </div>
                  </div>
                  <div
                    className="modal-footer border-0"
                    style={{ display: "unset" }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Not Now
                    </button>
                    <button type="button" className="btn btn-primary">
                      Submit
                    </button>
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

export default RequestInsentive;
