import React from 'react';

const ProfileList = ({ profiles, title }) => {
    
    return (
       <div className="profile-list">
      <h2>{ title }</h2>
      {profiles.map(profile => (
        <div className="profile-preview" key={profile.id} >
          <h3>Type:{profile.worktype}</h3>
          <h3>Manager:{profile.manager}</h3>
          <p>{ profile.body }</p>
        </div>
      ))}
    </div>
    );
}
export default ProfileList