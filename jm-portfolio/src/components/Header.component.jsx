import React from 'react';
import './Header.styles.css';

const Header = React.memo( () => {
        return (
            <div className="header-wrapper">
                <h1 className="header-title">Jacob McCracken</h1>
                <h3 className="sub-title">Web Developer</h3>
            </div>
        )
})

export default Header;