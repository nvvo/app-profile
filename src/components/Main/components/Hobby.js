import React from 'react';
export function Hobby({name, description, icon}) {
  return (
    <div className="content">
      <div className="icon">
        <i className={`fa fa-2x ${icon}`} />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
