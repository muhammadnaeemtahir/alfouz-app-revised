import { Link } from "react-router-dom";

const NGO = () => {
  return (
    <>
      <main className="container my-5">
        <div className="col-md-9 mx-auto">
          <div className="card rounded-4 p-md-5 p-3">
            <div className="card-header card-gradient">
              <div className="text-center">
                <img
                  src={require("../../assets/logos/logo.png")}
                  alt=""
                  className="img-fluid w-25"
                />
              </div>
            </div>
            <div className="card-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="ngo_name" className="form-label">
                      NGO Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="ngo_name"
                      id=""
                      className="form-control bg-light border-dark border border-2"
                      placeholder="Enter NGO name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="reg_number" className="form-label">
                      Registeration Number{" "}
                      <span className="text-secondary">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="reg_number"
                      id=""
                      className="form-control bg-light border-dark border border-2"
                      placeholder="Enter NGO registeration number"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Location (Address)<span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="address"
                      className="form-control bg-light border-dark border border-2"
                      id=""
                      cols="30"
                      rows="1"
                      placeholder="Enter NGO address"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      id=""
                      className="form-control bg-light border-dark border border-2"
                      placeholder="i.e. name@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id=""
                      className="form-control bg-light border-dark border border-2"
                      placeholder="Enter a password"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="confirm_password" className="form-label">
                      Confirm Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      id=""
                      className="form-control bg-light border-dark border border-2"
                      placeholder="Retype your password"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phone_number" className="form-label">
                      Phone Number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      id=""
                      className="form-control bg-light border-dark border border-2"
                      placeholder="Enter your phone number"
                      require
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="certificate" className="form-label">
                      Registeration Certificate{" "}
                      <span className="text-secondary">(optional)</span>
                    </label>
                    <input
                      type="file"
                      name="certificate"
                      id=""
                      className="form-control bg-light border-dark border border-2"
                    />
                  </div>
                </div>

                <div className="col-md-6 ms-auto">
                  <div className="mt-3">
                    <button className="btn btn-primary w-100" type="submit">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NGO;
