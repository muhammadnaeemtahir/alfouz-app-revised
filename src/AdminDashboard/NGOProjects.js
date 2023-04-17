
const NGOProjects = () => {
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
            <h1 className="fw-bold text-white mb-0">NGO All Projects</h1>
          </div>
        </div>
      </div>

      <div className="container px-md-5">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr className="bg-light">
                <th className=" h4">#</th>
                <th className=" h4">Name</th>
                <th className=" h4">Category</th>
                <th className=" h4">Start Date</th>
                <th className=" h4">End Date</th>
                <th style={{ minWidth: "100px" }} className=" h4">
                  Status
                </th>
                {/* <th className=" h4">Volunteers</th> */}
              </tr>
            </thead>

            <tbody>
              <tr className="bg-info">
                <td className="h5">2.</td>
                <td className="h5">Flood</td>
                <td className="h5">Disaster</td>
                <td className="h5">01/02/2023</td>
                <td className="h5">12/03/2023</td>
                <td className="h5">
                  <select
                    name=""
                    className="form-select bg-success border-0 text-white"
                    id=""
                  >
                    <option>Completed</option>
                    <option selected>Ongoing</option>
                  </select>
                </td>
                {/* <td className="text-center">
                  <Link
                    to="/admin-dashboard/volunteers"
                    className="btn btn-warning tex-uppercase"
                  >
                    See All
                  </Link>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NGOProjects;
