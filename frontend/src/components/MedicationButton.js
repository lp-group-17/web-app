import React from 'react';

const buttonStyle = {
    position: 'absolute',
    width: '550px',
    height: '75px',
    left: '445px',
    top: '623px'
};

const MedicationButton  = ({ label, handleClick }) => (
    <button
        className = "btn btn-default"
        style = {buttonStyle}
        onclick = {handleClick}
    >
        {label}
    </button>
);

export default MedicationButton;