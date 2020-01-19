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
            isMenuOpen: false
        };
    }

    handleMenuToggle = () => {
        this.setState((previousState) => {
            const {
                isMenuOpen: wasMenuOpen
            } = previousState;

            return {
                isMenuOpen: !wasMenuOpen
            };
        });
    }

    handleKeyPress = () => {}

    renderLinks = () => {
        const {
            props: {
                navigationLinks
            },
            state: {
                hasScrolled
            }
        } = this;

        const {
            displayName
        } = NavigationMobileComponent;

        const linkClassNames = classNames(
            `${displayName}__navigation-link`,
            {
                [`${displayName}__navigation-link--scrolled`]: hasScrolled
            }
        );

        return navigationLinks.map((navigationLink) => {
            const {
                pageName,
                pageURL
            } = navigationLink;

            return (
                <li key={pageURL}>
                    <Button
                        activeLinkClassName={`${displayName}__navigation-link--active`}
                        className={linkClassNames}
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

        const controlButtonClassNames = classNames(
            `${displayName}__control-button`,
            {
                [`${displayName}__control-button--closed`]: !isMenuOpen,
                [`${displayName}__control-button--open`]: isMenuOpen
            }
        );

        return (
            <nav className={displayName}>
                <div className={navigationClassNames}>
                    <div
                        className={controlButtonClassNames}
                        onClick={this.handleMenuToggle}
                        onKeyPress={this.handleKeyPress}
                        role={'button'}
                        tabIndex={0}
                    >
                        <div>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
                <ul className={navigationMenuClassNames}>
                    {this.renderLinks()}
                </ul>
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
