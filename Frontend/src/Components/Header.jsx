import React from 'react';
import { FaSearch, FaUser, FaMoon, FaSun } from "react-icons/fa";
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <nav className="header">
            <div className="logo">EVENTOPIA</div>
            <div className="buttons">
                {/* Dark Mode Toggle Button */}
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon />}
                </button>

                {/* Search Button */}
                <button>
                    <FaSearch />
                </button>

                {/* Login Button */}
                <button className="login-button">
                    <FaUser /> Login
                </button>
            </div>
        </nav>
    );
};

export default Header;
