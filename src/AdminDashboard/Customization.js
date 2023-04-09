const Customization = () => {
  const data = [
    { id: 1, image: require("../assets/images/flood.jpg") },
    { id: 2, image: require("../assets/images/flood.jpg") },
    { id: 3, image: require("../assets/images/flood.jpg") },
    // add more objects as needed
  ];

  return (
    <>
      <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
        <div className="row align-items-center g-0">
          <div className="col-md-1 col-2">
            <img
              src={require("../assets/images/customization-pg.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <div className="col-md-11 col-10">
            <h1 className="fw-bold text-white mb-0">Customization</h1>
          </div>
        </div>
      </div>

      <div className="container p-md-5">
        <div className="bg-white rounded-4" style={{ minHeight: "25rem" }}>
          <div className="bg-gray rounded-4 p-2 mb-3">
            <h1>Manage Your Web</h1>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw-bold text-dark active"
                  id="pills-layout-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-layout"
                  type="button"
                  role="tab"
                  aria-controls="pills-layout"
                  aria-selected="true"
                >
                  Layout
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw-bold text-dark"
                  id="pills-service-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-service"
                  type="button"
                  role="tab"
                  aria-controls="pills-service"
                  aria-selected="false"
                >
                  Service Category
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw-bold text-dark"
                  id="pills-info-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-info"
                  type="button"
                  role="tab"
                  aria-controls="pills-info"
                  aria-selected="false"
                >
                  Basic Info
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-layout"
              role="tabpanel"
              aria-labelledby="pills-layout-tab"
              tabindex="0"
            >
              <div className="p-3 bg-success rounded-4 p-2 mb-3">
                <div className="row">
                  <div className="col-md-1">
                    <div className="text-center mb-md-0 mb-2">
                      <img
                        src={require("../assets/icons/slideshow-icon.png")}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <p className="fw-bold h4 mb-md-0 mb-2">
                      Web slider which will be shown on starting page.
                      <small className="fw-light h6">
                        (Add minimum 3 images)
                      </small>
                    </p>
                  </div>
                  <div className="col-md-2">
                    <form action="">
                      <div className="position-relative">
                        <input
                          type="file"
                          name=""
                          id=""
                          className="position-absolute w-75 translate-middle start-50 top-50 opacity-0"
                          multiple
                          style={{ cursor: "pointer" }}
                        />
                        <button
                          className="btn btn-primary w-100"
                          style={{ cursor: "pointer" }}
                        >
                          Add <i className="fa-solid fa-upload"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-success rounded-4 p-2">
                <form action="" method="get">
                  <div className="row">
                    {data.map((item) => (
                      <div className="col-md-4 col-6" key={item.id}>
                        <div className="mb-3">
                          <div className="position-relative">
                            <input
                              type="checkbox"
                              className="position-absolute translate-middle p-2 rounded-circle form-check-input"
                              name=""
                              id=""
                              style={{
                                left: "92%",
                                top: "10%",
                                cursor: "pointer",
                              }}
                            />
                            <img
                              src={item.image}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-service"
              role="tabpanel"
              aria-labelledby="pills-service-tab"
              tabindex="0"
            >
              <div className="p-3">
                <form action="" method="get">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label
                          htmlFor="add_categories"
                          className="form-label fw-bold h4"
                        >
                          Add Categories
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="add_categories"
                          placeholder="example: HEALTH SERVICES, DISASTER MANAGEMENT ETC."
                          id=""
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label
                          htmlFor="category_description"
                          className="form-label fw-bold h4"
                        >
                          Add Category Description
                        </label>
                        <textarea
                          name="category_description"
                          className="form-control"
                          id=""
                          cols="30"
                          rows="5"
                          placeholder="Describe about category."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-4 ms-auto">
                      <div className="mb-3">
                        <div className="row">
                          <div className="col-md-7">
                            <button className="btn btn-outline-dark w-100 text-uppercase">
                              Cancel
                            </button>
                          </div>
                          <div className="col-md-5">
                            <button
                              className="btn btn-primary w-100 text-uppercase"
                              type="submit"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label
                          htmlFor="active_categories"
                          className="form-label fw-bold h4"
                        >
                          Active Categories
                        </label>
                        <div className="d-flex flex-wrap justify-content-start gap-1 p-3">
                          <span className="badge rounded-pill text-bg-secondary">
                            Disaster management
                            <button className="btn p-0">
                              <i className="fa-regular fa-circle-xmark text-light ms-1"></i>
                            </button>
                          </span>
                          <span className="badge rounded-pill text-bg-secondary">
                            Disaster management
                            <button className="btn p-0">
                              <i className="fa-regular fa-circle-xmark text-light ms-1"></i>
                            </button>
                          </span>
                          <span className="badge rounded-pill text-bg-secondary">
                            Disaster management
                            <button className="btn p-0">
                              <i className="fa-regular fa-circle-xmark text-light ms-1"></i>
                            </button>
                          </span>
                          <span className="badge rounded-pill text-bg-secondary">
                            Disaster management
                            <button className="btn p-0">
                              <i className="fa-regular fa-circle-xmark text-light ms-1"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-info"
              role="tabpanel"
              aria-labelledby="pills-info-tab"
              tabindex="0"
            >
              <div className="p-3">
                <div className="row">
                  <div className="col-md-5 ms-auto">
                    <div className="mb-3">
                      <div className="row">
                        <div className="col-md-7">
                          <button className="btn text-primary fw-bold text-decoration-underline w-100 text-uppercase">
                            Undo Changes
                          </button>
                        </div>
                        <div className="col-md-5">
                          <button
                            className="btn btn-primary w-100 text-uppercase"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="motivational_statement"
                        className="form-label h4"
                      >
                        Motivational Statement
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="any Quotes or mission statement"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="motivational_statement"
                        className="form-label h4"
                      >
                        Add Image
                        <small className="h-6 fw-light">
                          (this image will shown on description page)
                        </small>
                      </label>
                      <input
                        type="file"
                        name=""
                        id=""
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label
                        htmlFor="motivational_statement"
                        className="form-label h4"
                      >
                        Alfouz Description
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="describe about alfouz"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customization;
