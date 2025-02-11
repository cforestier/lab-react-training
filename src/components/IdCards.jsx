import React from 'react';

function IdCard({ listOfStudents }) {
  return (
    <div>
      {listOfStudents.map((student) => (
        <div key={`div ${student.lastName}`}>
          <picture key={`picture ${student.lastName}`}>
            <source srcSet={student.picture} media="(orientation: portrait)" />
            <img src={student.picture} alt={`${student.lastName}`} />
          </picture>
          <ul>
            <li>First Name: {student.firstName}</li>
            <li>Last Name: {student.lastName}</li>
            <li>Gender: {student.gender}</li>
            <li>Height: {student.height}</li>
            <li>Birth: {student.birth.toLocaleDateString()}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default IdCard;
