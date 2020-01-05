import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import classNames from '../../utils/classNames';
import destructureNetlifyCMS from '../../utils/destructureNetlifyCMS';

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
            }
        } = this;

        const {
            headerLinks = []
        } = destructureNetlifyCMS(data);

        return headerLinks.map((headerLink) => {
            const {
                pageName,
                pageURL
            } = headerLink;

            const {
                displayName
            } = HeaderComponent;

            return (
                <li key={pageURL}>
                    <Button
                        activeLinkClassName={`${displayName}__navigation-link--active`}
                        className={`${displayName}__navigation-link`}
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
                <span className={`${displayName}__logo`}>Sean McQuay</span>
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
