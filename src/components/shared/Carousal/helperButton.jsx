import React from 'react';
import SvgIcon from '../SvgIcon';

const PrevButton = ({ onClick }) => (
    <button className="custom-prev-button" onClick={onClick}>
        <SvgIcon
            name="previousBtn"
        />
    </button>
);

const NextButton = ({ onClick }) => (
    <button className="custom-next-button" onClick={onClick}>
        <SvgIcon
            name="nextBtn"
        />
    </button>
);

const CustomDot = ({ active, onClick }) => {
    return (
      <span
        className={`custom-dot ${active ? 'active' : ''}`}
        onClick={onClick}
      />
    );
  };
  
export { PrevButton, NextButton, CustomDot };