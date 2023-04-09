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
                <th
                  style={{
                    minWidth: "200px",
                  }}
                  className="fw-bold border-start border-end h5 py-3"
                >
                  Name
                </th>
                <th
                  style={{
                    minWidth: "200px",
                  }}
                  className="fw-bold border-start border-end h5 py-3"
                >
                  Contact No.
                </th>
                <th
                  style={{
                    minWidth: "200px",
                  }}
                  className="fw-bold h5 py-3"
                >
                  Address
                </th>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Volunteers;
