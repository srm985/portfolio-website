import PropTypes from 'prop-types';
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor/visibility-sensor';
import ReactMarkdown from 'react-markdown';

import classNames from '../../utils/classNames';

import './styles.scss';

class TextBlockComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };
    }

    handleVisibilityChange = (isVisible) => {
        this.setState((previousState) => {
            const {
                isVisible: wasVisible
            } = previousState;

            if (isVisible === wasVisible) {
                return null;
            }

            return ({
                isVisible
            });
        });
    }

    render() {
        const {
            props: {
                className,
                isAnimated,
                text
            },
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = TextBlockComponent;

        const componentClassNames = classNames(
            className,
            displayName,
            {
                [`${displayName}--animated`]: isAnimated,
                [`${displayName}--visible`]: isVisible
            }
        );

        return (
            <VisibilitySensor
                minTopValue={200}
                onChange={this.handleVisibilityChange}
                partialVisibility
                resizeCheck
            >
                <ReactMarkdown
                    className={componentClassNames}
                    source={text}
                />
            </VisibilitySensor>
        );
    }
}

TextBlockComponent.displayName = 'TextBlockComponent';

TextBlockComponent.propTypes = {
    className: PropTypes.string,
    isAnimated: PropTypes.bool,
    text: PropTypes.string
};

TextBlockComponent.defaultProps = {
    className: '',
    isAnimated: false,
    text: ''
};

export default TextBlockComponent;
