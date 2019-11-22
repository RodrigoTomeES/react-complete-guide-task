import React from 'react';

const ValidationComponent = (props) => {
    let validationOutput = 'Text long enough';
    if (props.length <= 5) {
        validationOutput = 'Text too short';
    }

    return (
        <p>{validationOutput}</p>
    );
}

export default ValidationComponent;
