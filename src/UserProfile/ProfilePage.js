import React from 'react';
import ProfileSidebar from './ProfileSidebar.js';
import Dashboard from './Dashboard.js';


const ProfilePage = () => {
    return (
        <div className="profile-container flex ">
            <div className="first-profile-element basis-1/6 "><ProfileSidebar /></div>
            <div className="second-profile-element basis-5/6 mt-20"><Dashboard /></div>
        </div> 
      
    );
  };
  
  export default ProfilePage;
  