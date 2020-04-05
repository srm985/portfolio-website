import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import classNames from '../../utils/classNames';

import './styles.scss';

class NavigationMobileComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasClickedMenu: false,
            isMenuOpen: false
        };
    }

    handleMenuToggle = () => {
        this.setState((previousState) => {
            const {
                isMenuOpen: wasMenuOpen
            } = previousState;

            return {
                hasClickedMenu: true,
                isMenuOpen: !wasMenuOpen
            };
        });
    }

    handleKeyPress = () => {}

    renderMenuButton = () => {
        const {
            state: {
                hasClickedMenu,
                isMenuOpen
            }
        } = this;

        const {
            displayName
        } = NavigationMobileComponent;

        const lines = [];

        const controlButtonClassNames = classNames(
            `${displayName}__control-button`,
            {
                [`${displayName}__control-button--closed`]: !isMenuOpen,
                [`${displayName}__control-button--open`]: isMenuOpen
            }
        );

        const menuStyle = {
            animationDuration: hasClickedMenu ? undefined : '0s'
        };

        for (let i = 0; i < 3; i++) {
            lines.push(
                <span style={menuStyle}>
                    {
                        i === 0 && (
                            <span style={menuStyle}>{'MENU'}</span>
                        )
                    }
                </span>
            );
        }

        return (
            <div
                className={controlButtonClassNames}
                onClick={this.handleMenuToggle}
                onKeyPress={this.handleKeyPress}
                role={'button'}
                tabIndex={0}
            >
                { lines }
            </div>
        );
    }

    renderLinks = () => {
        const {
            props: {
                navigationLinks
            }
        } = this;

        const {
            displayName
        } = NavigationMobileComponent;

        const linkClassNames = classNames(
            `${displayName}__navigation-link`
        );

        return navigationLinks.map((navigationLink) => {
            const {
                pageName,
                pageURL
            } = navigationLink;

            return (
                <li
                    className={linkClassNames}
                    key={pageURL}
                >
                    <Button
                        href={pageURL}
                        label={pageName}
                        styleType={BUTTON_STYLE_TYPE_INLINE}
                    />
                </li>
            );
        });
    }

    render() {
        const {
            state: {
                isMenuOpen
            }
        } = this;

        const {
            displayName
        } = NavigationMobileComponent;

        const navigationClassNames = classNames(
            `${displayName}__navigation`,
            {
                [`${displayName}__navigation--closed`]: !isMenuOpen,
                [`${displayName}__navigation--open`]: isMenuOpen
            }
        );

        const navigationMenuClassNames = classNames(
            `${displayName}__navigation-menu`,
            {
                [`${displayName}__navigation-menu--closed`]: !isMenuOpen,
                [`${displayName}__navigation-menu--open`]: isMenuOpen
            }
        );

        return (
            <nav className={displayName}>
                <div className={navigationClassNames}>
                    {this.renderMenuButton()}
                </div>
                <div className={navigationMenuClassNames}>
                    <ul className={`${displayName}__navigation-link-set`}>
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
}

NavigationMobileComponent.displayName = 'NavigationMobileComponent';

NavigationMobileComponent.propTypes = {
    navigationLinks: PropTypes.arrayOf(PropTypes.shape({
        pageName: PropTypes.string,
        pageURL: PropTypes.string
    }))
    // logoCopy: PropTypes.string
};

NavigationMobileComponent.defaultProps = {
    navigationLinks: []
    // logoCopy: ''
};

export default NavigationMobileComponent;
