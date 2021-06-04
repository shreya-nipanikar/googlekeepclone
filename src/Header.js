import React from 'react';
import './Header.css';
import { FaRegStickyNote } from 'react-icons/fa';




const Header = () => {
    return (
        <>
        <div className="header">
        <FaRegStickyNote className="icon" />
            <h2> Google Keep Clone</h2>
        </div>
        </>
    )
}

export default Header;