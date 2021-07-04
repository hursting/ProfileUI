import React from 'react';
import strings from 'strings';

const ProfileList = ({ profiles, title, handleDelete }) => {
    
    return (
       <div className="profile-list">
      <h2>{ title }</h2>
      {profiles.map(profile => (
        <div className="profile-preview" key={profile.id} >
          <h3>{strings.general.type}:{profile.worktype}</h3>
          <h3>{strings.general.manager}:{profile.manager}</h3>
          <p>{profile.body}</p>
          <button onClick={ ()=>handleDelete(profile.id) } > {strings.general.delete} </button>
        </div>
      ))}
    </div>
    );
}
export default ProfileList