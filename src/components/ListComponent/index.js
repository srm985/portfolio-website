import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import classNames from '../../utils/classNames';

import './styles.scss';

export const SHORT_LIST_LIMIT = 20;

function ListComponent(props) {
    const {
        displayName
    } = ListComponent;

    const renderListItems = (childList) => childList.map((childDetails) => {
        const {
            children,
            isRootList = false,
            properties,
            tagName,
            type,
            value
        } = childDetails;

        const componentClassNames = isRootList ? classNames(
            displayName,
            {
                [`${displayName}--ordered`]: tagName === 'ol',
                [`${displayName}--short`]: (children.length / 2) <= SHORT_LIST_LIMIT,
                [`${displayName}--unordered`]: tagName !== 'ol'
            }
        ) : '';

        // These are empty entries or new lines
        if (type === 'text' && value === '\n') {
            return null;
        }

        if (tagName === 'ul') {
            return (<ul className={componentClassNames}>{renderListItems(children)}</ul>);
        }

        if (tagName === 'ol') {
            return (<ol className={componentClassNames}>{renderListItems(children)}</ol>);
        }

        if (tagName === 'li' || tagName === 'p') {
            return (<li>{renderListItems(children)}</li>);
        }

        if (tagName === 'a') {
            return (
                <Button
                    {...properties}
                    isInternalURL={false}
                    label={children[0].value}
                    styleType={BUTTON_STYLE_TYPE_INLINE}
                />
            );
        }

        return value;
    }).filter((listItem) => listItem);

    return renderListItems([
        {
            ...props.node,
            isRootList: true
        }
    ]);
}

ListComponent.displayName = 'ListComponent';

ListComponent.propTypes = {
    key: PropTypes.string,
    node: PropTypes.arrayOf(PropTypes.shape({
        children: PropTypes.shape({}),
        isRootList: PropTypes.string,
        properties: PropTypes.shape({}),
        tagName: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string
    }))
};

ListComponent.defaultProps = {
    node: {}
};

export default ListComponent;
