import React from 'react'

export default function CounterDisplay({ number, children }) {
    return (
        <div>
            {children}
            <h4>Cant: {number} </h4>
        </div>
    )
}
