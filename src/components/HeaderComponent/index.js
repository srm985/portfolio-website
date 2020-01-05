import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Icon from '../IconComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import classNames from '../../utils/classNames';
import destructureNetlifyCMS from '../../utils/destructureNetlifyCMS';

import {
    logoIcon
} from '../../assets/icons';

import './styles.scss';

class HeaderComponent extends React.Component {
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
                data
            },
            state: {
                hasScrolled
            }
        } = this;

        const {
            displayName
        } = HeaderComponent;

        const {
            headerLinks = []
        } = destructureNetlifyCMS(data);

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
            state: {
                hasScrolled
            }
        } = this;

        const {
            displayName
        } = HeaderComponent;

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
                    <p>SEAN MCQUAY</p>
                </div>
                <ul className={`${displayName}__navigation`}>
                    {this.renderLinks()}
                </ul>
            </header>
        );
    }
}

HeaderComponent.displayName = 'HeaderComponent';

HeaderComponent.propTypes = {
    data: PropTypes.shape({})
};

HeaderComponent.defaultProps = {
    data: {}
};

export default HeaderComponent;
