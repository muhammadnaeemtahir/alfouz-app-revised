import { Link } from "react-router-dom";

const EditBankDetails = () => {
  return (
    <>
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
          <div className="col-md-2 ms-auto">
            <div className="mb-md-5 mb-3">
              <Link
                to="/ngo-dashboard/bank-account-details"
                className="btn btn-primary w-100"
              >
                Back
              </Link>
            </div>
          </div>
          <div className="row align-items-center mb-3">
            <div className="col-md-4">
              <label
                htmlFor="full_name"
                className="form-label text-white fw-bold"
              >
                Account
              </label>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-3">
            <div className="col-md-4">
              <label htmlFor="email" className="form-label text-white fw-bold">
                Title
              </label>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-3">
            <div className="col-md-4">
              <label
                htmlFor="description"
                className="form-label text-white fw-bold"
              >
                Account Number
              </label>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <input type="tel" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-3">
            <div className="col-md-4">
              <label
                htmlFor="registeration_no"
                className="form-label text-white fw-bold"
              >
                Branch
              </label>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-3">
            <div className="col-md-4">
              <label
                htmlFor="registeration_no"
                className="form-label text-white fw-bold"
              >
                Phone
              </label>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 mx-auto">
              <button className="btn btn-primary w-100">UPDATE</button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default EditBankDetails;
