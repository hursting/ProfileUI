import ProfileList from 'components/ProfileList';
import { useEffect, useState } from 'react';
import strings from 'strings';

const Home = () => {
  const [profiles, setProfiles] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    fetch('http://localhost:8000/profiles')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProfiles(data);
      });
  }, []);

  return (
    <div className="home">
      {profiles && (
        <ProfileList profiles={profiles} title={strings.profile.home.title} />
      )}
    </div>
  );
};

export default Home;
