import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Icon from '../IconComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import {
    gitHubIcon,
    linkedInIcon,
    stackOverflowIcon
} from '../../assets/icons';

import './styles.scss';

const FooterComponent = (props) => {
    const {
        footerCopy,
        gitHubURL,
        linkedInURL,
        stackOverflowURL
    } = props;

    const {
        displayName
    } = FooterComponent;

    const renderLinkButton = (linkIcon, linkURL) => (
        <Button
            href={linkURL}
            isInternalURL={false}
            styleType={BUTTON_STYLE_TYPE_INLINE}
        >
            <Icon
                className={`${displayName}__link-icon`}
                icon={linkIcon}
            />
        </Button>
    );

    return (
        <footer className={displayName}>
            <p className={`${displayName}__copy`}>{footerCopy}</p>
            <div className={`${displayName}__links`}>
                {
                    linkedInURL && renderLinkButton(linkedInIcon, linkedInURL)
                }
                {
                    stackOverflowURL && renderLinkButton(stackOverflowIcon, stackOverflowURL)
                }
                {
                    gitHubURL && renderLinkButton(gitHubIcon, gitHubURL)
                }
            </div>
        </footer>
    );
};

FooterComponent.displayName = 'FooterComponent';

FooterComponent.propTypes = {
    footerCopy: PropTypes.string,
    gitHubURL: PropTypes.string,
    linkedInURL: PropTypes.string,
    stackOverflowURL: PropTypes.string
};

FooterComponent.defaultProps = {
    footerCopy: '',
    gitHubURL: '',
    linkedInURL: '',
    stackOverflowURL: ''
};

export default FooterComponent;
