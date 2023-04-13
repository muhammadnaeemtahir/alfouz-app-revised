import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <>
      <main className="container py-5">
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
                  <label htmlFor="full_name" className="form-label">
                    Name<span className="text-danger">*</span>
                  </label>
                  <div class="input-group border border-secondary border-2 rounded">
                    <span class="input-group-text border-0" id="basic-addon1">
                      <i class="fa-solid fa-user fs-5"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control bg-light border-0"
                      placeholder="Enter your full name"
                      required
                      name="full_name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email<span className="text-danger">*</span>
                  </label>
                  <div class="input-group border border-secondary border-2 rounded">
                    <span class="input-group-text border-0">
                      <i class="fa-solid fa-envelope fs-5"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control bg-light border-0"
                      placeholder="i.e. name@email.com"
                      required
                      name="email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone_number" className="form-label">
                    Phone Number<span className="text-danger">*</span>
                  </label>
                  <div class="input-group border border-secondary border-2 rounded">
                    <span class="input-group-text border-0">
                      <i class="fa-solid fa-mobile fs-5"></i>
                    </span>
                    <input
                      type="tel"
                      class="form-control bg-light border-0"
                      placeholder="Mobile no."
                      required
                      name="phone_number"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cnic_number" className="form-label">
                    CNIC <span className="text-danger">*</span>
                  </label>
                  <div class="input-group border border-secondary border-2 rounded">
                    <span class="input-group-text border-0">
                      <i class="fa-solid fa-id-card-clip fs-5"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control bg-light border-0"
                      placeholder="13 digit CNIC number"
                      name="cnic_number"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address<span className="text-danger">*</span>
                  </label>
                  <div class="input-group border border-secondary border-2 rounded">
                    <span class="input-group-text">
                      <i class="fa-solid fa-location-dot fs-5"></i>
                    </span>
                    <textarea
                      class="form-control bg-light border-0"
                      placeholder="Enter address"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="institute_name"
                    className="form-label text-nowrap"
                  >
                    Institution{" "}
                    <span className="text-secondary">(optional)</span>
                  </label>
                  <div class="input-group border border-secondary border-2 rounded">
                    <span class="input-group-text border-0">
                      <i class="fa-solid fa-school fs-5"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control bg-light border-0"
                      name="institute_name"
                      id=""
                      placeholder="Your institute name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="enrollment"
                    className="form-label text-nowrap"
                  >
                    Enrollment ID{" "}
                    <span className="text-secondary">(optional)</span>
                  </label>
                  <div class="input-group border border-secondary border-2 rounded">
                    <span class="input-group-text border-0">
                      <i class="fa-regular fa-id-card fs-5"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control bg-light border-0"
                      name="enrollment"
                      id=""
                      placeholder="Enrollment ID"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="password" className="form-label">
                    Password<span className="text-danger">*</span>
                  </label>
                  <div class="input-group border border-secondary border-2 rounded">
                    <span class="input-group-text border-0">
                      <i class="fa-solid fa-lock fs-5"></i>
                    </span>
                    <input
                      type="password"
                      class="form-control bg-light border-0"
                      placeholder="Type your password"
                      required
                      name="password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="confirm_password" className="form-label">
                    Confirm Password
                    <span className="text-danger">*</span>
                  </label>
                  <div class="input-group border border-secondary border-2 rounded">
                    <span class="input-group-text border-0">
                      <i class="fa-solid fa-lock fs-5"></i>
                    </span>
                    <input
                      type="password"
                      class="form-control bg-light border-0"
                      placeholder="Confirm password"
                      required
                      name="confirm_password"
                    />
                  </div>
                </div>
                <div className="col-md-3 ms-auto">
                  <button className="btn btn-primary w-100 mt-3" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Volunteer;
