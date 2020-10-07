import React from 'react';
import { Link } from 'react-router-dom';
import './backLink.css';

export default function BackLink({ text, path }) {
    return (
        <Link className='new-search-link' to={path}>
            <i className='fas fa-arrow-left' /> {text}
        </Link>
    )
}
