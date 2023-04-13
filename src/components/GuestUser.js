import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const GuestUser = () => {
  return (
    <>
      <Header />
      {/* hero section */}
      <section className="hero-section">
        {/* carousel */}

        <div
          id="carouselExampleCaptions position-relative"
          className="carousel slide"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../assets/images/flood.jpg")}
                className="d-block w-100 img-fluid opacity-75"
                alt="..."
              />
              <div className="carousel-caption">
                <h1 className="fa-5x">
                  “The best among you are those who bring the greatest benefit
                  to others”
                </h1>
                <button className="btn btn-lg btn-primary rounded-pill">
                  DONATE NOW
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/flood.jpg")}
                className="d-block w-100 img-fluid opacity-75"
                alt="..."
              />
              <div className="carousel-caption">
                <h1 className="fa-5x">
                  “The best among you are those who bring the greatest benefit
                  to others”
                </h1>
                <button className="btn btn-lg btn-primary rounded-pill">
                  DONATE NOW
                </button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/flood.jpg")}
                className="d-block w-100 img-fluid opacity-75"
                alt="..."
              />
              <div className="carousel-caption">
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
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon btn btn-primary rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon btn btn-primary rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
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
                          style={{
                            maxWidth: "150px",
                            width: "100%",
                            height: "90px",
                          }}
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
                          style={{
                            maxWidth: "150px",
                            width: "100%",
                            height: "90px",
                          }}
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
                          style={{
                            maxWidth: "150px",
                            width: "100%",
                            height: "90px",
                          }}
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
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body bg-success text-center">
                  <h5 className="card-title">Flood Relief</h5>
                  <p className="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a href="#" className="btn btn-primary">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <img
                  src={require("../assets/images/project-img.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body bg-success text-center">
                  <h5 className="card-title">Flood Relief</h5>
                  <p className="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a href="#" className="btn btn-primary">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <img
                  src={require("../assets/images/project-img.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body bg-success text-center">
                  <h5 className="card-title">Flood Relief</h5>
                  <p className="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a href="#" className="btn btn-primary">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="" className="text-white text-decoration-none fw-bold">
              <i className="fa-solid fa-plus"></i> View All
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
                <div className="card-body text-center text-light">
                  <div className="text-center mb-3">
                    <img
                      src={require("../assets/logos/alkhidmat.png")}
                      alt=""
                      className="img-fluid w-25 rounded-circle"
                    />
                  </div>
                  <h5 className="card-title">Flood Relief</h5>
                  <p className="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary fw-bold text-white rounded-pill"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 rounded-4">
                <div className="card-body text-center text-light">
                  <div className="text-center mb-3">
                    <img
                      src={require("../assets/logos/alkhidmat.png")}
                      alt=""
                      className="img-fluid w-25 rounded-circle"
                    />
                  </div>
                  <h5 className="card-title">Flood Relief</h5>
                  <p className="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary fw-bold text-white rounded-pill"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 rounded-4">
                <div className="card-body text-center text-light">
                  <div className="text-center mb-3">
                    <img
                      src={require("../assets/logos/alkhidmat.png")}
                      alt=""
                      className="img-fluid w-25 rounded-circle"
                    />
                  </div>
                  <h5 className="card-title">Flood Relief</h5>
                  <p className="card-text">
                    Loss of household incomes, assets, rising food prices, and
                    disease outbreaks are impacting the most vulnerable groups.
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary fw-bold text-white rounded-pill"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button id="prev" type="button" className="btn mx-1">
              <i className="fa-solid fa-angle-left fs-3 fw-bold text-info"></i>
            </button>
            <button id="next" type="button" className="btn mx-1">
              <i className="fa-solid fa-angle-right fs-3 fw-bold"></i>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GuestUser;
