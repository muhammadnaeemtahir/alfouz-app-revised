const Awards = () => {
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
            <h1 className="fw-bold text-white mb-0">Awards</h1>
          </div>
        </div>
      </div>

      <div className="container px-md-5">
        <div className="row bg-white pb-3 rounded-4">
          <div className="col-12 px-0">
            <div className="bg-light p-3 pb-0 rounded-4 mb-3">
              <h2>Volunteer Requests</h2>
            </div>
          </div>
          <div className="col-12 px-0">
            <div className="bg-success rounded-4 mb-3 pt-2">
              <div className="row align-items-center">
                <div className="col-md-6 d-flex align-items-center">
                  <img
                    src={require("../assets/images/vounteer-dp.png")}
                    className="img-fluid"
                    style={{ maxWidth: "70px", width: "100%" }}
                    alt="alt-text"
                  />
                  <h3 className="fw-bold ms-2">Shahzaib Iqbal</h3>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <div className="mb-1 text-center">
                      <img
                        src={require("../assets/icons/upload.png")}
                        alt="alt-text"
                        className="img-fluid"
                      />
                    </div>
                    <div className="text-center">
                      <button className="btn btn-primary w-50">Upload</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary w-100">Reject</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
