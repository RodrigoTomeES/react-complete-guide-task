import React from 'react';

const UserInput = (props) => {
    const style = {
        padding: '20px',
    }

    return (
      <div>
          <input 
            type="text" 
            style = {style} 
            onChange = {props.changed} 
            value = {props.user}/>
      </div>
    );
}

export default UserInput;