const NGOProfile = () => {
  return (
    <>
      <div className="container-fluid px-0 mb-5">
        <div className="col-12">
          <div className="mb-5">
            <div className="position-relative">
              <img
                src={require("../assets/images/profile-cover.png")}
                alt="alt-text"
                className="img-fluid w-100"
              />
              <div
                className="position-absolute translate-middle ngo__pp"
                style={{
                  top: "100%",
                  left: "10%",
                }}
              >
                <div className="text-center">
                  <img
                    src={require("../assets/images/ngo-pp.png")}
                    alt="alt-text"
                    className="img-fluid w-75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 mx-auto">
          <div className="text-md-start text-center">
            <h1 className="text-white">EDHI FOUNDATION</h1>
            <p className="mb-0 text-muted">
              <i className="fa-solid fa-star text-warning fs-3 me-2"></i>
              <span className="text-white fw-bold">4.9/5</span> (20)
            </p>
          </div>
        </div>
      </div>

      <div className="container px-md-5">
        <h2 className="text-center text-white fw-bold mb-5">
          <span className="text-info">ONGOING</span> PROJECTS
        </h2>

        <div className="row mb-5 justify-content-evenly">
          <div className="col-md-3">
            <div className="mb-3">
              <div className="card border-0 rounded-top-5 rounded-bottom-5">
                <img
                  src={require("../assets/images/project-img.png")}
                  alt="alt-text"
                  className="img-fluid rounded-top-5"
                />
                <div className="bg-info p-3 text-center rounded-bottom-5">
                  <h2 className="text-white">Hello</h2>
                  <p className="text-white">
                    the history of establishing the Edhi child adoption Centre
                    and childcare services dates back to 1949.
                  </p>
                  <button className="btn btn-primary rounded-pill w-75">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <div className="card border-0 rounded-top-5 rounded-bottom-5">
                <img
                  src={require("../assets/images/project-img.png")}
                  alt="alt-text"
                  className="img-fluid rounded-top-5"
                />
                <div className="bg-info p-3 text-center rounded-bottom-5">
                  <h2 className="text-white">Hello</h2>
                  <p className="text-white">
                    the history of establishing the Edhi child adoption Centre
                    and childcare services dates back to 1949.
                  </p>
                  <button className="btn btn-primary rounded-pill w-75">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <div className="card border-0 rounded-top-5 rounded-bottom-5">
                <img
                  src={require("../assets/images/project-img.png")}
                  alt="alt-text"
                  className="img-fluid rounded-top-5"
                />
                <div className="bg-info p-3 text-center rounded-bottom-5">
                  <h2 className="text-white">Hello</h2>
                  <p className="text-white">
                    the history of establishing the Edhi child adoption Centre
                    and childcare services dates back to 1949.
                  </p>
                  <button className="btn btn-primary rounded-pill w-75">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row px-md-5">
          <div className="col-md-3">
            <div className="mb-3">
              <h2 className="text-info">EDHI FOUNDATION</h2>
              <p className="text-muted">
                Edhi foundation is a non profit organization, with having 10+
                offices in Pakistan and working broadly for the community
                services in Pakistan.
              </p>
              <div className="d-flex justify-content-evenly">
                <a className="text-decoration-none text-muted">
                  <i className="fa-brands fa-square-facebook fs-3"></i>
                </a>
                <a className="text-decoration-none text-muted">
                  <i className="fa-brands fa-square-instagram fs-3"></i>
                </a>
                <a className="text-decoration-none text-muted">
                  <i className="fa-brands fa-square-twitter fs-3"></i>
                </a>
                <a className="text-decoration-none text-muted">
                  <i className="fa-brands fa-linkedin fs-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <h2 className="text-info">EDHI FOUNDATION</h2>
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0">
                  <a
                    href="mailto:name@email.com"
                    className="text-decoration-none text-muted"
                  >
                    <i className="fa-solid fa-envelope"></i> name@email.com
                  </a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a className="text-decoration-none text-muted">
                    <i className="fa-solid fa-location-dot"></i> xyz, ABC
                  </a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="tel:" className="text-decoration-none text-muted">
                    <i className="fa-solid fa-phone"></i> 098765432
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NGOProfile;
