import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Button from '../ButtonComponent';
import CodeBlock from '../CodeBlockComponent';
import Image from '../ImageComponent';
import List from '../ListComponent';
import VisibilityChecker from '../VisibilityCheckerComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

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
    };

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

        const renderHardBreak = () => (
            <>
                <br />
                <br />
            </>
        );

        const renderLink = (props) => (
            <Button
                {...props}
                isInternalURL={false}
                styleType={BUTTON_STYLE_TYPE_INLINE}
            />
        );

        // Hooking markdown components into React components.
        const components = {
            a: renderLink,
            br: renderHardBreak,
            code: CodeBlock,
            img: Image,
            ol: List,
            ul: List
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
                    <ReactMarkdown components={components}>
                        {text}
                    </ReactMarkdown>
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
