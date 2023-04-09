import { Link } from "react-router-dom";

const MyProfile = () => {
  return ( 
    <>
     {/*Profile Information Heading*/}
      <div className="container-fluid bg-dark-gray my-md-3 p-md-3 p-2 mb-3">
        <div className="row align-items-center g-0">
          <div className="col-md-1 col-2">
            <img
              src={require("../assets/images/profile-pg.png")}
              alt="alt-text"
              className="img-fluid"
            />
          </div>
          <div className="col-md-11 col-10">
            <h1 className="fw-bold text-white mb-0">Profile Information</h1>
          </div>
        </div>
      </div>
      <div className="container px-md-5">

       {/*Edit and View Profile Button */}
        <div className="row mb-3">
          <div className="col-md-6 ms-auto">
            <div className="row">
              <div className="col-6 mb-md-5">
                <Link
                  to="/ngo-dashboard/edit-profile"
                  className="btn btn-primary w-100"
                > 
                  EDIT
                </Link>
              </div>
              <div className="col-6 mb-md-5">
                <Link to="/ngo-dashboard/ngo-profile" className="btn btn-primary w-100">
                  VIEW PROFILE
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/*Name*/}
        <div className="row align-items-center  mb-3">
          <div className="col-md-4">
            <label
              htmlFor="full_name"
              className="form-label text-white fw-bold"
            >
              Name
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-4">
              <p type="text" className="form-control bg-white" >Edhi Foundation</p>
            </div>
          </div>
        </div>

        {/*Email*/}
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label htmlFor="email" className="form-label text-white fw-bold">
              Email
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <p type="email" className="form-control bg-white" >name@email.com</p>
            </div>
          </div>
        </div>
        {/*Description*/}
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
              <p type="text" className="form-control bg-white" >  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                repellendus.</p>
              
            </div>
          </div>
        </div>
        {/*Registration*/}
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label
              htmlFor="registeration_no"
              className="form-label text-white fw-bold"
            >
              Registeration No.
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <p type="text" className="form-control bg-white" >876543</p>
            </div>
          </div>
        </div>
        {/*Adddress*/}
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label htmlFor="address" className="form-label text-white fw-bold">
              Address
            </label>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <p type="text" className="form-control bg-white" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                animi quasi laudantium voluptates odit voluptatum.</p>
            </div>
          </div>
        </div>
        {/*Registration Certificate*/}
        <div className="row align-items-center mb-3">
          <div className="col-md-4">
            <label
              htmlFor="certificate"
              className="form-label text-white fw-bold"
            >
              Certificate
            </label>
            
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <a className="btn btn-warning w-25" download>
                  View
                </a>
            </div>
          </div>
        </div>
        {/*Profile Image */}
        <div className="row align-items-center mb-3">
        <div className="col-md-4">
            <label
              htmlFor="certificate"
              className="form-label text-white fw-bold"
            >
              Profile Image
            </label>
            
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <a className="btn btn-warning w-25" download>
                  View
                </a>
            </div>
          </div>
        </div>
        {/*Cover Image */}
      <div className="row align-items-center mb-3">
          <div className="col-md-4">
              <p className="fw-bold text-white mb-0">Cover Image</p>
          </div>
          <div className="col-md-6">
              <div className="mb-3">
                <a className="btn btn-warning w-25" download>
                  View
                </a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
