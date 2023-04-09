import { Link } from "react-router-dom";

const GuestUser = () => {
  const partners = [
    {
      name: "Alkhidmat",
      logoURL: "../assets/logos/alkhidmat.png",
      description: `Alkhidmat Foundation Pakistan is one of the leading,
      non-profit organization, fully dedicated to humanitarian
      services since 1990. Alkhidmat's workers and volunteers
      continue to work tirelessly for the relief of affected people
      across Pakistan and worldwide.`,
    },
    {
      name: "Alkhidmat",
      logoURL: "../assets/logos/alkhidmat.png",
      description: `Alkhidmat Foundation Pakistan is one of the leading,
      non-profit organization, fully dedicated to humanitarian
      services since 1990. Alkhidmat's workers and volunteers
      continue to work tirelessly for the relief of affected people
      across Pakistan and worldwide.`,
    },
    {
      name: "Alkhidmat",
      logoURL: "../assets/logos/alkhidmat.png",
      description: `Alkhidmat Foundation Pakistan is one of the leading,
      non-profit organization, fully dedicated to humanitarian
      services since 1990. Alkhidmat's workers and volunteers
      continue to work tirelessly for the relief of affected people
      across Pakistan and worldwide.`,
    },
  ];

  return (
    <>
      {/* hero section */}
      <header className="my-md-3">
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container">
            <a
              className="h1 text-decoration-none text-white text-uppercase"
              href="#"
            >
              Alfouz
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars text-white fs-2"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item mx-md-3">
                  <a
                    className="nav-link text-white fw-bold"
                    aria-current="page"
                    href="#"
                  >
                    Join Us
                  </a>
                </li>
                <li className="nav-item mx-md-3">
                  <a className="nav-link text-white fw-bold" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item mx-md-3">
                  <a className="nav-link text-white fw-bold" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item mx-md-3">
                  <a className="nav-link text-white fw-bold" href="">
                    Sign In
                  </a>
                </li>
                <li className="nav-item mx-md-3">
                  <form action="#" method="post">
                    <button
                      className="btn btn-primary rounded-pill w-100 text-dark fw-bold"
                      type="submit"
                    >
                      DONATE
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* hero section */}
      <section className="hero-section">
        {/* carousel */}

        <div
          id="carouselExampleCaptions position-relative"
          class="carousel slide"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../assets/images/flood.jpg")}
                class="d-block w-100 img-fluid opacity-75"
                alt="..."
              />
              <div class="carousel-caption">
                <h1 className="fa-5x">
                  “The best among you are those who bring the greatest benefit
                  to others”
                </h1>
                <button className="btn btn-lg btn-primary rounded-pill">
                  DONATE NOW
                </button>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/images/flood.jpg")}
                class="d-block w-100 img-fluid opacity-75"
                alt="..."
              />
              <div class="carousel-caption">
                <h1 className="fa-5x">
                  “The best among you are those who bring the greatest benefit
                  to others”
                </h1>
                <button className="btn btn-lg btn-primary rounded-pill">
                  DONATE NOW
                </button>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/images/flood.jpg")}
                class="d-block w-100 img-fluid opacity-75"
                alt="..."
              />
              <div class="carousel-caption">
                <h1 className="fa-5x">
                  “The best among you are those who bring the greatest benefit
                  to others”
                </h1>
                <button className="btn btn-lg btn-primary rounded-pill">
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon btn btn-primary rounded-circle"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon btn btn-primary rounded-circle"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
          <div
            className="container position-absolute translate-middle start-50 hero-items"
            style={{ top: "105%" }}
          >
            <div className="text-end">
              <span className="bg-warning rounded-top p-2">
                Fundraise target 50,000
              </span>
            </div>
            <div className="row g-0">
              <div className="col-md-4">
                <div className="card rounded-0 border-0 p-3 bg-cyan">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="text-md-start text-center">
                        <img
                          src={require("../assets/images/charity.png")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="text-md-start text-center">
                        <p className="text-white fw-bold mb-0">
                          People donated
                        </p>
                        <p className="text-warning fw-bold h3">14,670</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card rounded-0 border-0 p-3 bg-primary">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="text-md-start text-center">
                        <img
                          src={require("../assets/images/charity.png")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="text-md-start text-center">
                        <p className="text-white fw-bold mb-0">
                          People get aid
                        </p>
                        <p className="text-warning fw-bold h3">14,670</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card rounded-0 border-0 p-3 bg-cyan">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="text-md-start text-center">
                        <img
                          src={require("../assets/images/charity.png")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="text-md-start text-center">
                        <p className="text-white fw-bold mb-0">
                          Money raised so far
                        </p>
                        <p className="text-warning fw-bold h3">14,670</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="services pt-5 mt-md-5">
        <div className="container-fluid mt-5 pt-md-5">
          <h1 className="text-center text-info fw-bold">SERVICES</h1>
          <div className="border rounded-4 p-md-5 p-3">
            <div className="row justify-content-evenly">
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/disaster.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h3 className="text-white">Disaster Management</h3>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/disaster.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h3 className="text-white">Disaster Management</h3>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/disaster.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h3 className="text-white">Disaster Management</h3>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/disaster.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h3 className="text-white">Disaster Management</h3>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/disaster.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h3 className="text-white">Disaster Management</h3>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/disaster.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h3 className="text-white">Disaster Management</h3>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/disaster.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h3 className="text-white">Disaster Management</h3>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GuestUser;
