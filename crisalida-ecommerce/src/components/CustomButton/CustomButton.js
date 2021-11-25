import React from 'react'
import './CustomButton.css';

export default function CustomButton({ text, ...props }) {
    //{onClick: onIncrement}
    return (
        <div className="container-button">
            <button {...props} >{text}</button>
        </div>
    )
}
