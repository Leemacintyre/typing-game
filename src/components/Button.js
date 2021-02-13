import React from 'react';

const Button = ({handleStart, disabled}) => {
    return (
        <button onClick={handleStart}>
            {disabled? 'start' : 'restart'}
        </button>
    );
};

export default Button;
