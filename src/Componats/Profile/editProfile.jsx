import React, { useState } from 'react';
import './profileForm..css'

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState('https://cdn-icons-png.flaticon.com/512/747/747376.png');
  const [addressFormVisible, setAddressFormVisible] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleAddressForm = () => {
    setAddressFormVisible(!addressFormVisible);
  };

  return ( 
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <div className="card mb-4">
            <div className="profile-container">
              <div id="profileImage" className="profile-pic">
                <img src={profileImage} alt="Profile" className="profile-icon" />
              </div>
              <label htmlFor="fileInput" className="upload-btn">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" width="24" height="24" alt="Upload" />
              </label>
              <input type="file" id="fileInput" className="hidden-input" accept="image/*" onChange={handleImageChange} />
            </div>
            <form className="form-card" onSubmit={(e) => e.preventDefault()}>
              <h5 className="text-center mb-4">Information</h5>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">First name<span className="text-danger">*</span></label>
                  <input type="text" id="fname" name="fname" placeholder="Enter your first name" className="form-control" required />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Last name<span className="text-danger">*</span></label>
                  <input type="text" id="lname" name="lname" placeholder="Enter your last name" className="form-control" required />
                </div>
              </div>

              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Country<span className="text-danger">*</span></label>
                  <input type="text" id="country" name="country" placeholder="EX. India" className="form-control" required />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Date of birth<span className="text-danger">*</span></label>
                  <input type="date" id="dob" name="dob" className="form-control" required />
                </div>
              </div>

              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Email<span className="text-danger">*</span></label>
                  <input type="email" id="email" name="email" placeholder="ecocart316@gmail.com" className="form-control" required />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Phone number<span className="text-danger">*</span></label>
                  <input type="tel" id="phone" name="phone" placeholder="Ex. 1928374650" className="form-control" required />
                </div>
              </div>

              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Profession</label>
                  <input type="text" id="job" name="job" placeholder="Ex. Businessman" className="form-control" />
                </div>
              </div>

              <div className="row justify-content-between text-left">
                <div className="container text-center">
                  <div className="address">
                    <button type="button" className="btn btn-primary" onClick={toggleAddressForm}>Address ▼</button>
                  </div>
                  {addressFormVisible && (
                    <div id="addressForm" className="mt-4">
                      <div className="mb-2">
                        <label className="form-label-1">Pincode <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter Pincode" required />
                      </div>
                      <div className="mb-2">
                        <label className="form-label-1">State <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter State" required />
                      </div>
                      <div className="mb-2">
                        <label className="form-label-1">City <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter City" required />
                      </div>
                      <div className="mb-2">
                        <label className="form-label">House No., Building Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter House No. & Building Name" required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Road Name, Area, Colony <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter Road Name, Area, Colony" required />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="save-address">
                <button type="submit" className="btn btn-success w-100">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default ProfileForm;