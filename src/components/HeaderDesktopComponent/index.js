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

class HeaderDesktopComponent extends React.Component {
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
                headerLinks
            },
            state: {
                hasScrolled
            }
        } = this;

        const {
            displayName
        } = HeaderDesktopComponent;

        const linkClassNames = classNames(
            `${displayName}__navigation-link`,
            {
                [`${displayName}__navigation-link--scrolled`]: hasScrolled
            }
        );

        return headerLinks.map((headerLink) => {
            const {
                pageName,
                pageURL
            } = headerLink;

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
        } = HeaderDesktopComponent;

        const componentClassNames = classNames(
            displayName,
            {
                [`${displayName}--scrolled`]: hasScrolled
            }
        );

        return (
            <header className={componentClassNames}>
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
            </header>
        );
    }
}

HeaderDesktopComponent.displayName = 'HeaderDesktopComponent';

HeaderDesktopComponent.propTypes = {
    headerLinks: PropTypes.arrayOf(PropTypes.shape({
        pageName: PropTypes.string,
        pageURL: PropTypes.string
    })),
    logoCopy: PropTypes.string
};

HeaderDesktopComponent.defaultProps = {
    headerLinks: [],
    logoCopy: ''
};

export default HeaderDesktopComponent;
