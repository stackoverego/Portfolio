import React, { useContext } from 'react';
import NavContext from '../context/NavContext';

const Navbar = () => {
    const { navigate } = useContext(NavContext);

    return (
        <nav className="navbar">
            {/* Centered Navigation Links */}
            <ul className="nav-links">
                {['home', 'work', 'about', 'contact'].map((item) => (
                    <li key={item} className="nav-item group">
                        <button
                            onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                navigate(item, rect);
                            }}
                            className="nav-btn"
                        >
                            {/* Original Text (Slides Up) */}
                            <span className="nav-text-original group-hover:transform-up">
                                {item}
                            </span>
                            {/* Red Text (Slides Up from Bottom) */}
                            <span className="nav-text-hover group-hover:transform-up">
                                {item}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
