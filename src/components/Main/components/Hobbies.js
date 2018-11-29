import React from 'react';
import Hobby from './Hobby';
export function Hobbies({hobbies}) {
  return (
    <div className="hobbies">
      {hobbies.map(({icon, name, description}, index) => (
        <Hobby key={index} icon={icon} name={name} description={description} />
      ))}
    </div>
  );
}
