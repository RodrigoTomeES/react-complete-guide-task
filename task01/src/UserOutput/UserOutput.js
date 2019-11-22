import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
    return (
      <div className="UserOutput">
        <p>{props.user}</p>
        <p>Ipsum</p>
      </div>
    );
}

export default UserOutput;
