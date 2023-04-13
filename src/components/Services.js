// import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      <Header />

      <div className="container">
        <section className="py-md-5">
          <div className="row flex-md-row flex-column-reverse align-items-center">
            <div className="col-md-6">
              <h1 className="display-5 text-light fw-bold mb-3">
                Lorem ipsum, dolor sit amet consectetur.
              </h1>
              <p className="lead text-light mb-md-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                obcaecati tempore voluptates accusantium, nulla eum, esse
                voluptas temporibus quae suscipit iste odio consectetur
                perspiciatis delectus natus. Modi magnam quidem autem!
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-md-0 mb-3">
                    <button className="btn btn-lg btn-primary shadow w-100">
                      DONATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-md-0 mb-3 text-center">
                <img
                  src={require("../assets/images/project-img.png")}
                  alt=""
                  className="img-fluid shadow rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <main className="pb-5">
          <h1 className="text-white text-center mb-5">Services</h1>
          <div className="row justify-content-evenly">
            <div className="col-md-3">
              <div class="card mb-3">
                <h5 class="card-header text-center">Category</h5>
                <div class="card-body">
                  <p class="card-text text-center">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <span class="badge rounded-pill text-bg-secondary mx-1">
                    tag
                  </span>
                  <span class="badge rounded-pill text-bg-secondary mx-1">
                    tag
                  </span>
                  <span class="badge rounded-pill text-bg-secondary mx-1">
                    tag
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card mb-3">
                <h5 class="card-header text-center">Category</h5>
                <div class="card-body">
                  <p class="card-text text-center">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <span class="badge rounded-pill text-bg-secondary mx-1">
                    tag
                  </span>
                  <span class="badge rounded-pill text-bg-secondary mx-1">
                    tag
                  </span>
                  <span class="badge rounded-pill text-bg-secondary mx-1">
                    tag
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card mb-3">
                <h5 class="card-header text-center">Category</h5>
                <div class="card-body">
                  <p class="card-text text-center">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <span class="badge rounded-pill text-bg-secondary mx-1">
                    tag
                  </span>
                  <span class="badge rounded-pill text-bg-secondary mx-1">
                    tag
                  </span>
                  <span class="badge rounded-pill text-bg-secondary mx-1">
                    tag
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Services;
