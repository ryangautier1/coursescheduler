import React from 'react';
import './buttonPrimary.css';

export default function ButtonPrimary({ text }) {
    return (
        <button
            className='btn btn-primary button-primary'
            type='button'
        >
            {text}
        </button>
    )
}