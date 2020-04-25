import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import './styles.scss';

const ImageCitationComponent = (props) => {
    const {
        authorLink,
        authorName,
        hostingSiteLink,
        hostingSiteName
    } = props;

    const {
        displayName
    } = ImageCitationComponent;

    return (
        <p className={displayName}>
            <span>{'Photo by'}</span>
            {
                hostingSiteLink ? (
                    <>
                        <Button
                            href={authorLink}
                            label={authorName}
                            styleType={BUTTON_STYLE_TYPE_INLINE}
                        />
                        <span>{' via '}</span>
                        <Button
                            href={hostingSiteLink}
                            label={hostingSiteName}
                            styleType={BUTTON_STYLE_TYPE_INLINE}
                        />
                    </>
                ) : (
                    <span>{' Author'}</span>
                )
            }
        </p>
    );
};

ImageCitationComponent.displayName = 'ImageCitationComponent';

ImageCitationComponent.propTypes = {
    authorLink: PropTypes.string,
    authorName: PropTypes.string,
    hostingSiteLink: PropTypes.string,
    hostingSiteName: PropTypes.string
};

ImageCitationComponent.defaultProps = {
    authorLink: '',
    authorName: '',
    hostingSiteLink: '',
    hostingSiteName: ''
};

export default ImageCitationComponent;
