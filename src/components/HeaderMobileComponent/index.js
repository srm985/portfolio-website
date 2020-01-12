import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import classNames from '../../utils/classNames';

import './styles.scss';

class HeaderMobileComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
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
        } = HeaderMobileComponent;

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
            displayName
        } = HeaderMobileComponent;

        return (
            <header className={displayName}>
                <ul className={`${displayName}__navigation`}>
                    {this.renderLinks()}
                </ul>
                <div className={`${displayName}__control-button`}>
                    <div>
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </header>
        );
    }
}

HeaderMobileComponent.displayName = 'HeaderMobileComponent';

HeaderMobileComponent.propTypes = {
    headerLinks: PropTypes.arrayOf(PropTypes.shape({
        pageName: PropTypes.string,
        pageURL: PropTypes.string
    }))
    // logoCopy: PropTypes.string
};

HeaderMobileComponent.defaultProps = {
    headerLinks: []
    // logoCopy: ''
};

export default HeaderMobileComponent;
