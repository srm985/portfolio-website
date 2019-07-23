import Prism from 'prismjs';
import PropTypes from 'prop-types';
import React from 'react';

import './prismTheme.scss';
import './styles.scss';

const CodeBlockComponent = (props) => {
    const {
        children
    } = props;

    const styledCode = Prism.highlight(children, Prism.languages.javascript, 'jsx');

    console.log({
        children
    });

    return (
        <pre className={CodeBlockComponent.displayName}>
            <code
                className={'language-jsx'}
                dangerouslySetInnerHTML={{
                    __html: styledCode
                }}
            />
        </pre>
    );
};

CodeBlockComponent.displayName = 'CodeBlockComponent';

export default CodeBlockComponent;
