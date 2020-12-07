import PropTypes from 'prop-types';
import React from 'react';
// import Prism from 'prismjs';
// import React, {
//     useEffect
// } from 'react';
import {
    Prism as SyntaxHighlighter
} from 'react-syntax-highlighter';

// import classNames from '../../utils/classNames';

// import 'prismjs/plugins/line-numbers/prism-line-numbers';

import '../../vendor/prismTheme.scss';
import './styles.scss';

const CodeBlockComponent = (props) => {
    const {
        language: interpretedLanguage,
        value
    } = props;

    const language = interpretedLanguage || 'jsx';

    console.log('code:', props);

    // const {
    //     displayName
    // } = CodeBlockComponent;

    // const {
    //     languages: {
    //         [language]: prismLanguage
    //     }
    // } = Prism;

    // const styledCode = Prism.highlight(value, prismLanguage, language);

    // const componentClassNames = classNames(
    //     displayName,
    //     'line-numbers'
    // );

    // During Gatsby builds, the document object isn't available.
    // useEffect(() => {
    //     setTimeout(Prism.highlightAll);
    // });

    return (
        // <pre className={componentClassNames}>
        //     <code
        //         className={`language-${language}`}
        //         // eslint-disable-next-line react/no-danger
        //         dangerouslySetInnerHTML={{
        //             __html: styledCode
        //         }}
        //     />
        // </pre>
        <SyntaxHighlighter
            language={language}
            showLineNumbers
        >
            {value}
        </SyntaxHighlighter>
    );
};

CodeBlockComponent.displayName = 'CodeBlockComponent';

CodeBlockComponent.propTypes = {
    language: PropTypes.string,
    value: PropTypes.string
};

CodeBlockComponent.defaultProps = {
    language: '',
    value: ''
};

export default CodeBlockComponent;
