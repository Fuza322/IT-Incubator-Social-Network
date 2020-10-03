import React from 'react';
import s from './Header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <img src='https://w7.pngwing.com/pngs/1024/211/png-transparent-social-media-name-tag-social-web-social-media-angle-logo-social-media.png' alt='HeaderLogo'/>
        </header>
    )
}

export default Header;