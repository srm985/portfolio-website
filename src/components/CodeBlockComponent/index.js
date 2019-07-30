import Prism from 'prismjs';
import PropTypes from 'prop-types';
import React from 'react';

import '../../vendor/prismTheme.scss';
import './styles.scss';

const CodeBlockComponent = (props) => {
    const {
        children
    } = props;

    const styledCode = Prism.highlight(children, Prism.languages.javascript, 'jsx');

    return (
        <pre className={CodeBlockComponent.displayName}>
            <code
                className={'language-jsx'}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: styledCode
                }}
            />
        </pre>
    );
};

CodeBlockComponent.displayName = 'CodeBlockComponent';

CodeBlockComponent.propTypes = {
    children: PropTypes.node
};

CodeBlockComponent.defaultProps = {
    children: ''
};

export default CodeBlockComponent;
