import React from 'react';
import strings from 'strings';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles, title }) => {
  return (
    <div className="profile-list">
      <h2>{title}</h2>

      {profiles.map((profile) => (
        <div className="profile-preview" key={profile.id}>
          <Link to={`/view/${profile.id}`}>
            <h3>
              {strings.general.type}:{profile.worktype}
            </h3>
            <h3>
              {strings.general.manager}:{profile.manager}
            </h3>
            <p>{profile.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ProfileList;
