import React from 'react';
import PropTypes from 'prop-types';

const Hobby = ({name, description, icon}) => {
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
};

Hobby.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Hobby;
