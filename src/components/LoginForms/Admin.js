import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <main className="container mt-5">
        <div className="col-md-6 col-sm-9 col-10 mx-auto">
          <div className="card rounded-4 card-gradient p-md-5 p-3">
            <div className="card-header">
              <div className="text-center">
                <img
                  src={require("../../assets/logos/logo.png")}
                  alt=""
                  className="img-fluid w-50"
                />
              </div>
            </div>
            <div className="card-body">
              <form className="needs-validation" novalidate>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        for="validationCustom01"
                        class="form-label text-light"
                      >
                        Email / Username
                      </label>
                      <input
                        autocomplete="off"
                        type="email"
                        class="form-control is-valid"
                        id="validationCustom01"
                        placeholder="i.e. name@email.com"
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        for="validationCustom03"
                        class="form-label text-light"
                      >
                        Password
                      </label>
                      <input
                        autocomplete="off"
                        type="password"
                        class="form-control is-invalid"
                        id="validationCustom03"
                        placeholder="Enter your password"
                        required
                      />
                      <div class="invalid-feedback">
                        The password you entered is incorrect.
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    {/* <button class="btn btn-primary w-100" type="submit">
                      Login
                    </button> */}

                    <Link
                      to="/admin-dashboard"
                      class="btn btn-primary w-100"
                      type="submit"
                    >
                      Login
                    </Link>
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

export default Admin;
