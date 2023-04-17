const ProjectRequests = () => {
  return (
    <>
      <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
        <div className="row align-items-center g-0">
          <div className="col-md-1 col-2">
            <img
              src={require("../assets/icons/requests-icon.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <div className="col-md-11 col-10">
            <h1 className="fw-bold text-white mb-0">Project Requests</h1>
          </div>
        </div>
      </div>

      <div className="container px-md-5">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead className="bg-light">
              <tr>
                <th className="fw-bold h5 py-3">#</th>
                <th
                  className="fw-bold border-start border-end h5 py-3"
                  style={{ minWidth: "100px" }}
                >
                  Name
                </th>
                <th
                  className="fw-bold border-start border-end h5 py-3"
                  style={{ minWidth: "100px" }}
                >
                  NGO
                </th>
                <th className="fw-bold h5 py-3">Description</th>
                <th className="fw-bold h5 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-success my-2">
                <td className="h5">1.</td>
                <td className="h5 text-nowrap">Flood</td>
                <td className="h5 text-nowrap">Edhi</td>
                <td className="h5 text-wrap">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque, alias.
                </td>
                <td className="text-center text-nowarp">
                  <div class="btn-group">
                    <button className="btn btn-primary text-uppercase">
                      Approve
                    </button>
                    <button className="btn btn-danger text-uppercase">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-success my-2">
                <td className="h5">2.</td>
                <td className="h5 text-nowrap">Flood</td>
                <td className="h5 text-nowrap">Edhi</td>
                <td className="h5 text-wrap">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque, alias.
                </td>
                <td className="text-center text-nowarp">
                  <div class="btn-group">
                    <button className="btn btn-primary text-uppercase">
                      Approve
                    </button>
                    <button className="btn btn-danger text-uppercase">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProjectRequests;
