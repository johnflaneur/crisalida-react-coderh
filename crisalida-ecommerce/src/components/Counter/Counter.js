import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

export default function Counter({ onIncrement, onDecrement, onReset }) {

    return (
        <div>
            <CustomButton className='custom-button' text="+" onClick={onIncrement} />
            <button onClick={onDecrement}>-</button>
        </div>
    )
}
