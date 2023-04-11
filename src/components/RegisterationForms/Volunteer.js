import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <>
      <main className="container mt-5">
        <div className="col-md-9 mx-auto">
          <div className="card rounded-4 card-gradient p-md-5 p-3">
            <div className="card-header">
              <div className="text-center">
                <img
                  src={require("../../assets/logos/logo.png")}
                  alt=""
                  className="img-fluid w-25"
                />
              </div>
            </div>
            <div className="card-body">
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                  <label
                    htmlFor="validationCustom01"
                    className="form-label text-light"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    defaultValue="Mark"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="validationCustom02"
                    className="form-label text-light"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    defaultValue="Otto"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label text-light"
                  >
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label text-light"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="validationCustom04"
                    className="form-label text-light"
                  >
                    State
                  </label>
                  <select
                    className="form-select"
                    id="validationCustom04"
                    required
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>...</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="validationCustom05"
                    className="form-label text-light"
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom05"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label
                      className="form-check-label text-light"
                      htmlFor="invalidCheck"
                    >
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
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
