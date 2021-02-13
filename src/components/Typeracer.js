import React from 'react';
import Button from "./Button";

const Typeracer = (props) => {
    const {newWord, inputValue, animation, disabled, setInputValue, time, handleInput, handleStart} = props;

    return (
        <div className="typeRacer">
            <div className="wordOutput">
                <p>{newWord}</p>
            </div>
            <div className="time">
                <p style={{animation: animation !== null ? animation : ''}} >{time}</p>
            </div>
            <div className="wordValues">
                <input type="text"
                       disabled={disabled && disabled}
                       value={inputValue}
                       onChange={(event) => setInputValue(event.target.value)}
                       placeholder={disabled ? '' : 'Start typing...'}
                       onKeyPress={(event) => handleInput(event) }
                />
                <Button
                handleStart={handleStart}
                disabled={disabled}
                />
            </div>
        </div>
    );
};

export default Typeracer;
