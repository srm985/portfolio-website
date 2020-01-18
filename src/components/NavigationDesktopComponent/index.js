import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Icon from '../IconComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import classNames from '../../utils/classNames';

import {
    logoIcon
} from '../../assets/icons';

import './styles.scss';

class NavigationDesktopComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasScrolled: false
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const {
            body,
            documentElement
        } = document;

        const hasScrolled = !!(body.scrollTop || documentElement.scrollTop);

        this.setState({
            hasScrolled
        });
    }

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
        } = NavigationDesktopComponent;

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
            props: {
                logoCopy
            },
            state: {
                hasScrolled
            }
        } = this;

        const {
            displayName
        } = NavigationDesktopComponent;

        const componentClassNames = classNames(
            displayName,
            {
                [`${displayName}--scrolled`]: hasScrolled
            }
        );

        return (
            <navigation className={componentClassNames}>
                <div className={`${displayName}__logo`}>
                    <Icon
                        className={`${displayName}__logo-icon`}
                        icon={logoIcon}
                    />
                    <p>{logoCopy}</p>
                </div>
                <ul className={`${displayName}__navigation`}>
                    {this.renderLinks()}
                </ul>
            </navigation>
        );
    }
}

NavigationDesktopComponent.displayName = 'NavigationDesktopComponent';

NavigationDesktopComponent.propTypes = {
    logoCopy: PropTypes.string,
    navigationLinks: PropTypes.arrayOf(PropTypes.shape({
        pageName: PropTypes.string,
        pageURL: PropTypes.string
    }))
};

NavigationDesktopComponent.defaultProps = {
    logoCopy: '',
    navigationLinks: []
};

export default NavigationDesktopComponent;
