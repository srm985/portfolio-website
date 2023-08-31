import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

function LoadingIndicatorComponent(props) {
    const {
        isFullScreen,
        isVisible
    } = props;

    const {
        displayName
    } = LoadingIndicatorComponent;

    const componentClassNames = classNames(
        displayName,
        {
            [`${displayName}--full-screen`]: isFullScreen,
            [`${displayName}--bounded`]: !isFullScreen
        }
    );

    const renderDots = (dotQuantity) => {
        const dotElements = [];

        for (let i = 0; i < dotQuantity; i++) {
            const dotClassNames = classNames(
                `${displayName}__dot`,
                `${displayName}__dot-${i + 1}`
            );

            dotElements.push(
                <div
                    className={dotClassNames}
                    key={i}
                />
            );
        }

        return dotElements;
    };

    return (
        isVisible
        && (
            <div className={componentClassNames}>
                <div className={`${displayName}__loading-box`}>
                    {renderDots(3)}
                </div>
            </div>
        )
    );
}

LoadingIndicatorComponent.displayName = 'LoadingIndicatorComponent';

LoadingIndicatorComponent.propTypes = {
    isFullScreen: PropTypes.bool,
    isVisible: PropTypes.bool
};

LoadingIndicatorComponent.defaultProps = {
    isFullScreen: true,
    isVisible: false
};

export default LoadingIndicatorComponent;
