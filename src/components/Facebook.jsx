import profiles from '../data/berlin.json';
import { Button } from 'antd';
import { useState } from 'react';

function Facebook() {
  const uniqueCountries = [
    ...new Set(profiles.map((student) => student.country)),
  ];

  const [searchKey, setSearchKey] = useState('');
  const handleCountry = (country) => {
    setSearchKey(country);
  };

  return (
    <div>
      {uniqueCountries.map((country) => (
        <Button onClick={() => handleCountry(country)}>{country}</Button>
      ))}

      <div className="facebook-repertory">
        {profiles.map((profile) => (
          <div
            className={
              profile.country === searchKey
                ? 'facebook-country-selected'
                : 'facebook'
            }
            key={profile.firstName}
          >
            <div>
              <img src={profile.img} alt={profile.firstName} />
            </div>
            <div className="student-info">
              <div>
                <b>First Name: </b>
                {profile.firstName}
              </div>
              <div>
                <b>Last Name:</b>
                {profile.lastName}
              </div>
              <div>
                <b>Country:</b>
                {profile.country}
              </div>
              <div>
                <b>Type:</b>
                {profile.isStudent ? 'Student' : 'Teacher'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facebook;
