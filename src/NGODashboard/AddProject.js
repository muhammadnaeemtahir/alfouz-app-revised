const AddProject = () => {
  return (
    <>
      <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
        <div className="row align-items-center g-0">
          <div className="col-md-1 col-2">
            <img
              src={require("../assets/images/add-project-pg.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <div className="col-md-11 col-10">
            <h1 className="fw-bold text-white mb-0">Add Project</h1>
          </div>
        </div>
      </div>

      <div className="container px-md-5">
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label
              htmlFor="project_name"
              className="form-label text-white fw-bold"
            >
              Name
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label htmlFor="location" className="form-label text-white fw-bold">
              Location
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label
              htmlFor="description"
              className="form-label text-white fw-bold"
            >
              Description
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label htmlFor="date" className="form-label text-white fw-bold">
              Date
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label htmlFor="date" className="form-label text-white fw-bold">
              End Date
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label
              htmlFor="Service_Category"
              className="form-label text-white fw-bold"
            >
              Service Category
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <select name="" className="form-select" id="">
                <option selected disabled>
                  -- Select Service Category --
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label
              htmlFor="project_cover"
              className="form-label text-white fw-bold"
            >
              Project Cover
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input type="file" className="form-control" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 mx-auto">
            <button className="btn btn-primary w-100">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
