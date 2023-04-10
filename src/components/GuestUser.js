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
                          Money raised so far
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
                          src={require("../assets/images/dollar.png")}
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
                          src={require("../assets/images/care.png")}
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
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="services pt-5 mt-md-5">
        <div className="container-fluid my-5 pt-md-5">
          <div className="mb-5">
            <h1 className="text-center text-info fw-bold">SERVICES</h1>
            <p className="text-center text-light">
              The spirit of all religions is to serve humanity
            </p>
          </div>
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
                    <h4 className="text-white">Disaster Management</h4>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/healthcare.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h4 className="text-white">Health Services</h4>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/education.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h4 className="text-white">Free Education</h4>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/faucet.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h4 className="text-white">Clean water</h4>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/orphan-care.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h4 className="text-white">Orphan Care</h4>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/community.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h4 className="text-white">Community Services</h4>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-6">
                <div className="text-center mb-md-5 mb-3">
                  <div className="mb-3">
                    <img
                      src={require("../assets/images/trees.png")}
                      alt=""
                      className="img-fluid w-25"
                    />
                    <h4 className="text-white">Tree Plantation</h4>
                    <button className="btn btn-primary">DONATE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section className="my-5">
        <div className="mb-5">
          <h1 className="text-center text-info fw-bold">
            Active <span className="text-white">Projects</span>
          </h1>
          <p className="text-light text-center">
            These are currently ongoing project from different NGOs
          </p>
        </div>
        <div className="container-fluid">
          <div className="row g-1 justify-content-evenly">
            <div className="col-md-3">
              <div className="card mb-3">
                <img
                  src={require("../assets/images/project-img.png")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body bg-success text-center">
                  <h5 class="card-title">Flood Relief</h5>
                  <p class="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a href="#" class="btn btn-primary">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <img
                  src={require("../assets/images/project-img.png")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body bg-success text-center">
                  <h5 class="card-title">Flood Relief</h5>
                  <p class="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a href="#" class="btn btn-primary">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <img
                  src={require("../assets/images/project-img.png")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body bg-success text-center">
                  <h5 class="card-title">Flood Relief</h5>
                  <p class="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a href="#" class="btn btn-primary">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="" className="text-white text-decoration-none fw-bold">
              <i class="fa-solid fa-plus"></i> View All
            </Link>
          </div>
        </div>
      </section>

      {/* projects */}
      <section className="my-5 partners">
        <div className="mb-5">
          <h1 className="text-center text-info fw-bold">
            Partner <span className="text-white">NGOs</span>
          </h1>
          <p className="text-light text-center">
            These are all registered NGOs
          </p>
        </div>
        <div className="container-fluid">
          <div className="row g-1 justify-content-evenly">
            <div className="col-md-3">
              <div className="card mb-3 rounded-4">
                <div class="card-body text-center text-light">
                  <div className="text-center mb-3">
                    <img
                      src={require("../assets/logos/alkhidmat.png")}
                      alt=""
                      className="img-fluid w-25 rounded-circle"
                    />
                  </div>
                  <h5 class="card-title">Flood Relief</h5>
                  <p class="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a
                    href="#"
                    class="btn btn-primary fw-bold text-white rounded-pill"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 rounded-4">
                <div class="card-body text-center text-light">
                  <div className="text-center mb-3">
                    <img
                      src={require("../assets/logos/alkhidmat.png")}
                      alt=""
                      className="img-fluid w-25 rounded-circle"
                    />
                  </div>
                  <h5 class="card-title">Flood Relief</h5>
                  <p class="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a
                    href="#"
                    class="btn btn-primary fw-bold text-white rounded-pill"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 rounded-4">
                <div class="card-body text-center text-light">
                  <div className="text-center mb-3">
                    <img
                      src={require("../assets/logos/alkhidmat.png")}
                      alt=""
                      className="img-fluid w-25 rounded-circle"
                    />
                  </div>
                  <h5 class="card-title">Flood Relief</h5>
                  <p class="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a
                    href="#"
                    class="btn btn-primary fw-bold text-white rounded-pill"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button id="prev" type="button" className="btn mx-1">
              <i class="fa-solid fa-angle-left fs-3 fw-bold text-info"></i>
            </button>
            <button id="next" type="button" className="btn mx-1">
              <i class="fa-solid fa-angle-right fs-3 fw-bold"></i>
            </button>
          </div>
        </div>
      </section>

      <footer className="mb-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <h2 className="text-white">AL-FOUZ</h2>
                <p className="text-white">
                  Alfouz explains about a concept of developing a nonprofit
                  website for NGOs/charity organizations. It will bring together
                  these organizations and volunteers for effective community
                  service.
                </p>
                <p className="text-center">
                  <a
                    href="#"
                    className="text-decoration-none text-light mx-2"
                    target="_blank"
                  >
                    <i class="fa-brands fa-facebook fs-2"></i>
                  </a>
                  <a
                    href="#"
                    className="text-decoration-none text-light mx-2"
                    target="_blank"
                  >
                    <i class="fa-brands fa-twitter fs-2"></i>
                  </a>
                  <a
                    href="#"
                    className="text-decoration-none text-light mx-2"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin  fs-2"></i>
                  </a>
                  <a
                    href="#"
                    className="text-decoration-none text-light mx-2"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram fs-2"></i>
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-2">
              <h3 className="text-white">Pages</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Join Us
                  </Link>
                </li>
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Services
                  </Link>
                </li>
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    About Us
                  </Link>
                </li>
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Sign in
                  </Link>
                </li>
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Donate
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h3 className="text-white">Services</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Disaster Management
                  </Link>
                </li>
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Health Services
                  </Link>
                </li>
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Free Education
                  </Link>
                </li>
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Clean Water
                  </Link>
                </li>
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Orphan Care
                  </Link>
                </li>
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Community Services
                  </Link>
                </li>
                <li class="list-group-item bg-transparent border-0 px-0 pb-0">
                  <Link to="#" className="text-decoration-none text-white">
                    Tree Plantation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <h3 className="text-white">Maps Location</h3>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.743209180338!2d73.02663591454548!3d33.715593042844326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef8c137888d%3A0xc3ccfd031ad14ba6!2sBahria%20University!5e0!3m2!1sen!2s!4v1681140235637!5m2!1sen!2s"
                className="w-100"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GuestUser;
