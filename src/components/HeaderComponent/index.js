import React from 'react';

import {
    Link
} from 'gatsby';

import './styles.scss';

const HeaderComponent = () => {
    const {
        displayName
    } = HeaderComponent;

    return (
        <header className={displayName}>
            <span className={`${displayName}__logo`}>Sean McQuay</span>
            <ul className={`${displayName}__navigation`}>
                <li className={`${displayName}__navigation--link`}>
                    <Link to={'/'}>About</Link>
                </li>
                <li className={`${displayName}__navigation--link`}>
                    <Link to={'/'}>Work</Link>
                </li>
                <li className={`${displayName}__navigation--link`}>
                    <Link to={'/'}>Contact</Link>
                </li>
            </ul>
        </header>
    );
};

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;
