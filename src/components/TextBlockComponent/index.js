import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeBlock from '../CodeBlockComponent';
import VisibilityChecker from '../VisibilityCheckerComponent';

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

        // Hooking markdown components into React components.
        const renderers = {
            break: () => { console.log('**********************'); },
            code: CodeBlock
        };

        const componentClassNames = classNames(
            className,
            displayName,
            {
                [`${displayName}--animated`]: isAnimated,
                [`${displayName}--visible`]: isVisible
            }
        );

        return (
            <VisibilityChecker handleChange={this.handleVisibilityChange}>
                <div className={componentClassNames}>
                    <ReactMarkdown
                        renderers={renderers}
                        source={text}
                    />
                </div>
            </VisibilityChecker>
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
