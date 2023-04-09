import { Link } from "react-router-dom";

const Volunteers = () => {
  return (
    <>
      <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
        <div className="row align-items-center g-0">
          <div className="col-md-1 col-2">
            <img
              src={require("../assets/images/volunteers-pg.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <div className="col-md-11 col-10">
            <h1 className="fw-bold text-white mb-0">Volunteers</h1>
          </div>
        </div>
      </div>

      <div className="container px-md-5">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead className="bg-light">
              <tr>
                <th className="fw-bold h5 py-3">#</th>
                <th className="fw-bold border-start border-end h5 py-3">
                  Name
                </th>
                <th className="fw-bold border-start border-end h5 py-3">
                  Contact No.
                </th>
                <th className="fw-bold h5 py-3">Address</th>
                <th className="fw-bold h5 py-3">Projects</th>
                <th className="fw-bold h5 py-3">User Status</th>
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
                  <span className="h5 ms-2">Shahzaib</span>
                </td>
                <td className="h5 text-nowrap">0315-095456</td>
                <td className="h5 text-nowrap">Street # 3, Rawalpindi</td>
                <td>
                  <Link className="btn btn-danger text-uppercase">See All</Link>
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

export default Volunteers;
