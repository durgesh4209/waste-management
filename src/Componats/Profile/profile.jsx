import React, { useState } from 'react';
import './profile.css';
import HeaderProvider from '../../context/HeaderProver';

const Profile = () => {
  const [profileImage, setProfileImage] = useState('https://cdn-icons-png.flaticon.com/512/747/747376.png');

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

  return (
      <>
      <HeaderProvider/>
         <div style={{ paddingTop: "20px" }}>
      <div class="container mt-4">
        <div class="main-card">
          <div class="d-flex justify-content-between align-items-center">
            <h4>Client Data</h4>
            <a href="/profileForm" class="btn btn-danger">Edit</a>
          </div>  

          <div class="d-flex m-t-28">
            <div class="card profile-card">
              <div id="profileImage" class="profile-pic">
                <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" id="profileIcon" />
              </div>
              <input type="file" id="fileInput" class="hidden-input" accept="image/*" hidden />
              <p className='m-t-20'>Hong Kong, China</p>
              <p className='m-t-8'>example@gmail.com</p>
              <p className='m-t-8'>+1 888-123-4567</p>
            </div>
            <div class="card p-3" style={{ flex: 2 }}>
              <h5>Account Details</h5>
              <p className='m-t-30'><strong>First Name:</strong>James</p>
              <p className='m-t-20'><strong>Last Name:</strong> Charles</p>
              <p className='m-t-20'><strong>Date of Birth:</strong> 9-10-1997</p>
              <p className='m-t-20'><strong>Gender:</strong> Female</p>
            </div>
          </div>

          <div class="card-container mt-3">
            <div class="card p-3">
              <h5>Company Information</h5>
              <p className='m-t-25'><strong>Company Name:</strong> Artema Medical</p>
              <p className='m-t-10'><strong>Company Website:</strong> www.artemamed.com</p>
              <p className='m-t-10'><strong>Company Description:</strong> Surgical Instruments</p>
              <p className='m-t-10'><strong>Serial Code:</strong> 8ah76782</p>
            </div>
            <div class="card p-3">
              <h5>Company Address</h5>
              <p className='m-t-25'><strong>Country:</strong> USA</p>
              <p className='m-t-10'><strong>State:</strong> Arizona</p>
              <p className='m-t-10'><strong>City:</strong> Florida</p>
              <p className='m-t-10'><strong>Zip Code:</strong> 99550</p>
              <p className='m-t-10'><strong>Street Address:</strong> Avenue East, 87 Florida</p>
            </div>
          </div>
        </div>
        <div>
        <footer/>
      </div>
      </div>
    </div>
      </>

  );
};

export default Profile;