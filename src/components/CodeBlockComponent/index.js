import PropTypes from 'prop-types';
import React from 'react';
import {
    Prism as SyntaxHighlighter
} from 'react-syntax-highlighter';
import {
    vscDarkPlus
} from 'react-syntax-highlighter/dist/esm/styles/prism';

import classNames from '../../utils/classNames';

import './styles.scss';

function CodeBlockComponent(props) {
    const {
        children,
        className,
        inline: isInline,
        language
    } = props;

    const fieldValue = children[0];

    const {
        displayName
    } = CodeBlockComponent;

    const componentClassNames = classNames(
        displayName,
        className,
        {
            [`${displayName}--inline`]: isInline
        }
    );

    return (
        isInline ? (
            <code className={componentClassNames}>{fieldValue}</code>
        ) : (
            <SyntaxHighlighter
                className={componentClassNames}
                language={language}
                showLineNumbers
                style={vscDarkPlus}
                wrapLines
            >
                {fieldValue}
            </SyntaxHighlighter>
        )
    );
}

CodeBlockComponent.displayName = 'CodeBlockComponent';

CodeBlockComponent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
    // eslint-disable-next-line react/boolean-prop-naming
    inline: PropTypes.bool,
    language: PropTypes.string
};

CodeBlockComponent.defaultProps = {
    children: [],
    className: '',
    inline: false,
    language: ''
};

export default CodeBlockComponent;
