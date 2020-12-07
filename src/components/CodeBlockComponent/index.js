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

const CodeBlockComponent = (props) => {
    const {
        className,
        language,
        value
    } = props;

    const {
        displayName
    } = CodeBlockComponent;

    const componentClassNames = classNames(
        displayName,
        className
    );

    return (
        <SyntaxHighlighter
            className={componentClassNames}
            language={language}
            showLineNumbers
            style={vscDarkPlus}
            wrapLines
        >
            {value}
        </SyntaxHighlighter>
    );
};

CodeBlockComponent.displayName = 'CodeBlockComponent';

CodeBlockComponent.propTypes = {
    className: PropTypes.string,
    language: PropTypes.string,
    value: PropTypes.string
};

CodeBlockComponent.defaultProps = {
    className: '',
    language: '',
    value: ''
};

export default CodeBlockComponent;
