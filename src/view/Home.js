import ProfileList from 'components/ProfileList';
import { useEffect, useState } from 'react';
import strings from 'strings';

const Home = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, worktype: "Drainage", body: "profile 1",manager:"tom" },
    { id: 2, worktype: "Trenching", body: "profile 1",manager:"tom" },
    { id: 3, worktype: "Boring", body: "thi", manager:"tom" },
  ])
  useEffect(() => {
    console.log('Home has been refreshed');
  })

  const handleDelete = (id) => {
    const filteredProfiles = profiles.filter(profile => profile.id !== id);
    setProfiles(filteredProfiles);
  }

    return (
      <div className="home">
        <ProfileList profiles={profiles} title={strings.profile.home.title} handleDelete={ handleDelete} />
      </div>
    );
  }
   
  export default Home;