import { Link } from "react-router-dom";

const NGOs = () => {
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
            <h1 className="fw-bold text-white mb-0">NGOs</h1>
          </div>
        </div>
      </div>

      <div className="container px-md-5">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead className="bg-light">
              <tr>
                <th className="fw-bold h5 py-3 text-nowrap">#</th>
                <th
                  className="fw-bold border-start border-end h5 py-3 text-nowrap"
                  style={{ minWidth: "200px" }}
                >
                  NGO Name
                </th>
                <th className="fw-bold border-start border-end h5 py-3">
                  Contact No.
                </th>
                <th
                  className="fw-bold h5 py-3 text-nowrap"
                  style={{ minWidth: "200px" }}
                >
                  Address
                </th>
                <th className="fw-bold h5 py-3 text-nowrap">Projects</th>
                <th className="fw-bold h5 py-3 text-nowrap">NGO Profile</th>
                <th className="fw-bold h5 py-3 text-nowrap">NGO Certificate</th>
                <th className="fw-bold h5 py-3 text-nowrap">NGO Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-success my-2">
                <td className="h5">1.</td>
                <td className="text-nowrap">
                  <img
                    src={require("../assets/images/vounteer-dp.png")}
                    alt="alt-text"
                    className="img-fluid"
                  />
                  <span className="h5 ms-2">ALKHIMAT</span>
                </td>
                <td className="h5 text-nowrap">0315-095456</td>
                <td className="h5 text-nowrap">Street # 3, Rawalpindi</td>
                <td>
                  <Link
                    to="/admin-dashboard/ngo-projects"
                    className="btn btn-sm btn-danger text-uppercase"
                  >
                    See All
                  </Link>
                </td>
                <td>
                  <Link
                    to="/admin-dashboard/ngo-profile"
                    className="btn btn-sm btn-danger text-uppercase"
                  >
                    View Profile
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger text-uppercase"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View Certificate
                  </button>

                  {/* Modal content */}
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header border-0">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body text-center">
                          <img
                            src={require("../assets/logos/alkhidmat.png")}
                            class="border-0 img-fluid w-100"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <form action="" method="get">
                    <select name="" id="" className="form-select bg-info">
                      <option value="1" selected>
                        Enabled
                      </option>
                      <option value="2">Disabled</option>
                    </select>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NGOs;
