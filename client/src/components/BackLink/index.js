import React from 'react';
import { Link } from 'react-router-dom';
import './backLink.css';

export default function BackLink() {
    return (
        <Link className='new-search-link' to='/'>
            <i className='fas fa-arrow-left' /> Start a new search
        </Link>
    )
}
