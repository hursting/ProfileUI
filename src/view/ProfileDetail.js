import React from 'react';
import strings from 'strings';

const ProfileDetail = ({ profile }) => {
  return (
    <div className="profile-detail">
      <h1>{strings.profile.detail.title}</h1>
      {/* <article>
        <h2>{profile.worktype}</h2>
        <p>{profile.body}</p>
      </article> */}
    </div>
  );
};
export default ProfileDetail;
