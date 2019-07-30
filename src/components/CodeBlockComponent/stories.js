import React from 'react';
import {
    storiesOf
} from '@storybook/react';

import CodeBlock from './index';

const stories = storiesOf(CodeBlock.displayName, module);

stories.add('default', () => {
    const code = `
    import PropTypes from 'prop-types';
    import React from 'react';

    import {
        INPUT_TYPE_TEXT,
        INPUT_TYPES
    } from './config';

    import './styles.scss';

    const InputComponent = (props) => {
        const {
            placeholder,
            type
        } = props;

        return (
            <input
                className={InputComponent.displayName}
                placeholder={placeholder}
                type={type}
            />
        );
    };

    InputComponent.displayName = 'InputComponent';

    InputComponent.propTypes = {
        placeholder: PropTypes.string,
        type: PropTypes.oneOf(INPUT_TYPES)
    };

    InputComponent.defaultProps = {
        placeholder: '',
        type: INPUT_TYPE_TEXT
    };

    export default InputComponent;`;

    return (
        <div style={{
            padding: '40px'
        }}
        >
            <CodeBlock>{code}</CodeBlock>
        </div>
    );
});
