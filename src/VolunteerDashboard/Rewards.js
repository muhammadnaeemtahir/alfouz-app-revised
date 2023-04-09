import { Link } from "react-router-dom";

const Rewards = () => {
  const projects = [
    {
      name: "Flood",
      category: "Disaster",
      start_date: "2022-01-01",
      end_date: "2022-03-31",
    },
    {
      name: "Orphan",
      category: "Community",
      start_date: "2022-02-15",
      end_date: "2022-05-15",
    },
    {
      name: "Winter",
      category: "Disaster",
      start_date: "2022-03-01",
      end_date: "2022-04-30",
    },
  ];

  return (
    <>
      <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
        <div className="row align-items-center g-0">
          <div className="col-md-1 col-2">
            <img
              src={require("../assets/images/awards-icon.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <div className="col-md-11 col-10">
            <h1 className="fw-bold text-white mb-0">Rewards</h1>
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
                <th className="h4">Status</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project, index) => (
                <tr className="bg-info" key={index}>
                  <td className="h5">{index + 1}</td>
                  <td className="h5">{project.name}</td>
                  <td className="h5">{project.category}</td>
                  <td className="h5">{project.start_date}</td>
                  <td className="h5">{project.end_date}</td>
                  <td className="h5">
                    <div className="dropdown">
                      <button
                        className="btn btn-warning btn-sm dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        GET Reward
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="">
                            E-Certificate
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="">
                            CSP Hours
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Rewards;
