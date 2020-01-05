import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Icon from '../IconComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import destructureNetlifyCMS from '../../utils/destructureNetlifyCMS';

import {
    gitHubIcon,
    linkedInIcon,
    stackOverflowIcon
} from '../../assets/icons';

import './styles.scss';

const FooterComponent = (props) => {
    const {
        data
    } = props;

    const {
        displayName
    } = FooterComponent;

    const {
        footerCopy,
        gitHubURL,
        linkedInURL,
        stackOverflowURL
    } = destructureNetlifyCMS(data);

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
    data: PropTypes.shape({})
};

FooterComponent.defaultProps = {
    data: {}
};

export default FooterComponent;
