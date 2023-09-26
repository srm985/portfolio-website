import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Icon from '../IconComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import './styles.scss';

function FooterComponent(props) {
    const {
        content: {
            footerCopy = '',
            socialMediaLinks = []
        }
    } = props;

    const {
        displayName
    } = FooterComponent;

    const renderLinkButtons = () => socialMediaLinks.map((linkInformation) => {
        const {
            socialMediumIcon: {
                publicURL: iconURL
            } = {},
            socialMediumName,
            socialMediumURL
        } = linkInformation;

        return (
            <Button
                href={socialMediumURL}
                isInternalURL={false}
                key={socialMediumURL}
                screenReaderLabel={socialMediumName}
                styleType={BUTTON_STYLE_TYPE_INLINE}
            >
                <Icon
                    className={`${displayName}__link-icon`}
                    iconURL={iconURL}
                />
            </Button>
        );
    });

    console.log(renderLinkButtons());

    return (
        <footer className={displayName}>
            <p className={`${displayName}__copy`}>{footerCopy}</p>
            <div className={`${displayName}__links`} />
        </footer>
    );
}

FooterComponent.displayName = 'FooterComponent';

FooterComponent.propTypes = {
    content: PropTypes.shape({
        footerCopy: PropTypes.string,
        socialMediaLinks: PropTypes.arrayOf(PropTypes.shape({
            socialMediumIcon: PropTypes.shape({
                publicURL: PropTypes.string
            }),
            socialMediumName: PropTypes.string,
            socialMediumURL: PropTypes.string
        }))
    })
};

FooterComponent.defaultProps = {
    content: {}
};

export default FooterComponent;
