import PropTypes from 'prop-types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
    vscDarkPlus
} from 'react-syntax-highlighter/dist/esm/styles/prism';

import classNames from '../../utils/classNames';

import './styles.scss';

function CodeBlockComponent(props) {
    const {
        children,
        className,
        language,
        node
    } = props;

    const isInline = !node.properties?.className;

    const {
        displayName
    } = CodeBlockComponent;

    const syntaxLanguage = language || className.replace('language-language', 'language');

    const componentClassNames = classNames(
        displayName,
        syntaxLanguage,
        {
            [`${displayName}--inline`]: isInline
        }
    );

    return (
        isInline ? (
            <code className={componentClassNames}>{children}</code>
        ) : (
            <SyntaxHighlighter
                className={componentClassNames}
                language={syntaxLanguage}
                showLineNumbers
                style={vscDarkPlus}
                wrapLines
            >
                {children}
            </SyntaxHighlighter>
        )
    );
}

CodeBlockComponent.displayName = 'CodeBlockComponent';

CodeBlockComponent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
    language: PropTypes.string,
    node: PropTypes.shape({
        properties: PropTypes.shape({
            className: PropTypes.arrayOf(PropTypes.string)
        })
    })
};

CodeBlockComponent.defaultProps = {
    children: [],
    className: '',
    language: '',
    node: {}
};

export default CodeBlockComponent;
