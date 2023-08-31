import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import './styles.scss';

function ImageCitationComponent(props) {
    const {
        authorLink,
        authorName,
        hostingSiteLink,
        hostingSiteName,
        isCited
    } = props;

    const {
        displayName
    } = ImageCitationComponent;

    return (
        isCited && (
            <p className={displayName}>
                <span>{'Photo by '}</span>
                {
                    hostingSiteLink ? (
                        <>
                            <Button
                                href={authorLink}
                                isInternalURL={false}
                                label={authorName}
                                styleType={BUTTON_STYLE_TYPE_INLINE}
                            />
                            <span>{' via '}</span>
                            <Button
                                href={hostingSiteLink}
                                isInternalURL={false}
                                label={hostingSiteName}
                                styleType={BUTTON_STYLE_TYPE_INLINE}
                            />
                        </>
                    ) : (
                        <span>{'Author'}</span>
                    )
                }
            </p>
        )
    );
}

ImageCitationComponent.displayName = 'ImageCitationComponent';

ImageCitationComponent.propTypes = {
    authorLink: PropTypes.string,
    authorName: PropTypes.string,
    hostingSiteLink: PropTypes.string,
    hostingSiteName: PropTypes.string,
    isCited: PropTypes.bool
};

ImageCitationComponent.defaultProps = {
    authorLink: '',
    authorName: '',
    hostingSiteLink: '',
    hostingSiteName: '',
    isCited: false
};

export default ImageCitationComponent;
