import { Link } from "react-router-dom";

const VolunteerIndex = () => {
  const activeProjects = [
    "Flood relief Camp",
    "Turkey Earthquake",
    "Winter drive",
    "Iftar drive",
  ];

  return (
    <>
      <div className="d-flex flex-md-column flex-column-reverse">
        <div className="container pt-md-3">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 col-2 ms-auto">
              <div className="row g-0">
                <div className="col-md-11">
                  <div className="text-end d-md-block d-none">
                    <p className="fw-bold text-white mb-0">ShazhaibIqbal01</p>
                    <small className="text-white">Volunteer</small>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="dropdown text-md-end">
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={require("../assets/images/ngo-dp.png")}
                        alt="alt-text"
                        className="img-fluid"
                      />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/volunteer-dashboard/my-profile"
                          className="dropdown-item"
                        >
                          View Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/volunteer-dashboard/edit-profile"
                        >
                          Edit Profile
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
          <div className="row align-items-center g-0">
            <div className="col-md-1 col-2">
              <img
                src={require("../assets/images/dashboard-pg.png")}
                alt="alt-text"
                className="img-fluid"
              />
            </div>
            <div className="col-md-11 col-10">
              <h1 className="fw-bold text-white mb-0">Dashboard</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mx-md-3">
          <div className="col-md-6">
            <div className="mb-5">
              <h2 className="text-white">Active Projects</h2>
              <div className="p-3 bg-info rounded-4">
                <ul className="list-group list-group-flush mb-1   ">
                  {activeProjects.map((aciveProject) => (
                    <li className="list-group-item bg-info text-white border-white h5">
                      {aciveProject}
                    </li>
                  ))}
                </ul>
                <p className="text-end mb-0">
                  <Link
                    to="/volunteer-dashboard/all-projects"
                    className="text-dark text-decoration-none fw-bold"
                  >
                    <i className="fa-solid fa-plus"></i> View All
                  </Link>
                </p>
              </div>
            </div>
            <div className="mb-5">
              <h2 className="text-white">Performance</h2>
              <div
                className="p-3 bg-info rounded-4"
                style={{ height: "20rem" }}
              >
                <div className="row">
                  <div className="col-2">
                    <img
                      src={require("../assets/icons/star.png")}
                      alt="alt-text"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="col-6">
                    <p className="h3 text-white">
                      Points
                      <sub className="text-light">
                        <small>(Lavel 1)</small>
                      </sub>
                    </p>
                    <form action="#" method="post">
                      <label
                        htmlFor="volunteer_rating"
                        className="form-label text-light mb-0"
                      >
                        40 hrs to level 2
                      </label>
                      <input
                        type="range"
                        className="form-range w-100"
                        min="0"
                        max="100"
                        value="20"
                      />
                    </form>
                  </div>
                  <div className="col-4">
                    <p className="h3 text-white">20 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 ms-auto">
            <div className="mb-3">
              <h2 className="text-white">Announcements</h2>
              <div
                className="py-4 bg-info rounded-4 notifications__area"
                style={{
                  height: "40rem",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
              >
                <div className="p-3 rounded-3 mb-2 bg-secondary">
                  <div className="row align-items-center mb-2">
                    <div className="col-7">
                      <div className="row g-2 align-items-center">
                        <div className="col-3">
                          <img
                            src={require("../assets/images/noti-icon.png")}
                            alt="alt-text"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="col-4">Admin</div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="text-end">
                        <small>30m ago</small>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div className="col-8">
                      <p className="mb-0 h6">Holiday Update!</p>
                      <small>
                        All projects will be closed on Independence day.
                      </small>
                    </div>
                    <div className="col-4">
                      <div className="text-end">
                        <img
                          src={require("../assets/images/holiday.png")}
                          alt="alt-text"
                          className="img-fluid w-75"
                        />
                      </div>
                    </div>
                  </div>
                  <small className="text-secondary">2 more notifcations</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerIndex;
