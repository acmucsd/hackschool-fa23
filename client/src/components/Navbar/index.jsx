import React from 'react';
import './style.css';

/**
 * Navbar component with buttons that link to pages.
 */
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <h1>Finance Buddy</h1>
            </div>
            <div className="nav-buttons">
                <a href="/create">Create Purchase</a>
                <a href="/view">View Purchase</a>
            </div>
        </div>
    );
};

export default Navbar;