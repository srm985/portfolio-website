import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Icon from '../IconComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import './styles.scss';

const FooterComponent = (props) => {
    const {
        footerCopy,
        socialMediaLinks
    } = props;

    const {
        displayName
    } = FooterComponent;

    const renderLinkButtons = () => socialMediaLinks.map((linkInformation) => {
        const {
            socialMediumIcon,
            socialMediumName,
            socialMediumURL
        } = linkInformation;

        return (
            <Button
                href={socialMediumURL}
                isInternalURL={false}
                screenReaderLabel={socialMediumName}
                styleType={BUTTON_STYLE_TYPE_INLINE}
            >
                <Icon
                    className={`${displayName}__link-icon`}
                    icon={socialMediumIcon}
                />
            </Button>
        );
    });

    return (
        <footer className={displayName}>
            <p className={`${displayName}__copy`}>{footerCopy}</p>
            <div className={`${displayName}__links`}>
                {
                    renderLinkButtons()
                }
            </div>
        </footer>
    );
};

FooterComponent.displayName = 'FooterComponent';

FooterComponent.propTypes = {
    footerCopy: PropTypes.string,
    socialMediaLinks: PropTypes.arrayOf(PropTypes.shape({
        socialMediumIcon: PropTypes.string,
        socialMediumName: PropTypes.string,
        socialMediumURL: PropTypes.string
    }))
};

FooterComponent.defaultProps = {
    footerCopy: '',
    socialMediaLinks: []
};

export default FooterComponent;
