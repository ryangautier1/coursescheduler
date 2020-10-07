import React from 'react';
import './pageTitle.css';

export default function PageTitle({ text }) {
    return (
        <h1 className='page-title'>{text}</h1>
    )
}
