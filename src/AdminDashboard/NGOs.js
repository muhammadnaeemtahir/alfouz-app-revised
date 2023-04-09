import { Link } from "react-router-dom";

const NGOs = () => {
  function handleDetails() {
    const details = document.getElementById("details");
    details.classList.toggle("d-none");
    details.classList.toggle("d-block");
  }

  return (
    <>
      <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
        <div className="row align-items-center g-0">
          <div className="col-md-1 col-2">
            <img
              src={require("../assets/icons/ngo-network.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <div className="col-md-11 col-10">
            <h1 className="fw-bold text-white mb-0">Requests</h1>
          </div>
        </div>
      </div>

      <div className="container p-md-4">
        <div className="bg-white rounded-5">
          <div className="bg-gray rounded-4 p-2 mb-3">
            <h1>Registered NGO’s</h1>
          </div>
          <div className="bg-success rounded-4 p-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-1">
                <div className="text-center">
                  <img
                    src={require("../assets/images/foundation.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="text-md-start text-center">
                  <h2 className="mb-0 fw-bold">Edhi Foundation</h2>
                  <p>Donate for kids to their well being, and serve humanity</p>
                </div>
              </div>
              <div className="col-md-3 col-10">
                <Link
                  to="/volunteer-dashboard/donate-amount"
                  className="btn btn-primary w-100"
                >
                  Donate Now
                </Link>
              </div>
              <div className="col-1">
                <div className="">
                  <button className="btn" type="button" onClick={handleDetails}>
                    <i className="fa-solid fa-angle-down"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="details d-none" id="details">
              <h3 className="text-center">About Edhi Foundation</h3>
              <p>
                We accomplish this through our unique network of health
                professionals and organization committed to improving health
                policies and practices, edhi Foundation is a nonprofit providing
                life saving medical care to children aims at creating a long.
                <Link className="text-decoration-none text-dark ms-1 fw-bold">
                  <i className="fa-solid fa-plus"></i>
                  More
                </Link>
              </p>
              <div className="row align-items-center">
                <div className="col-6">
                  <p>2000+ Donated</p>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <p className="text-secondary mb-0">Total Donation</p>
                    <p className="fw-bold">50,000PKR</p>
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

export default NGOs;
