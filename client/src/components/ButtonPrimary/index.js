import React from 'react';
import './buttonPrimary.css';

export default function ButtonPrimary({ text, submit }) {
    return (
        <button
            className='btn btn-primary button-primary'
            type={submit ? "submit" : "button"}
        >
            {text}
        </button>
    )
}
