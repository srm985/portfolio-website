import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

function ListComponent(props) {
    const {
        displayName
    } = ListComponent;

    const renderListItems = (listItemsList) => listItemsList.map((listItemDetails) => {
        const {
            key,
            props: nestedProps,
            props: {
                children: nestedChildren,
                node: {
                    ordered: isOrderedList,
                    type: nodeType
                } = {}
            },
            type: functionalType
        } = listItemDetails;

        const isList = nodeType === 'list';
        const isListItem = nodeType === 'listItem';

        const isTypeFunction = functionalType !== undefined && typeof functionalType === 'function';

        if (isList) {
            const isShortList = nestedChildren.length <= 10;

            const componentClassNames = classNames(
                displayName,
                {
                    [`${displayName}--ordered`]: isOrderedList,
                    [`${displayName}--short`]: isShortList,
                    [`${displayName}--unordered`]: !isOrderedList
                }
            );

            return (
                isOrderedList ? (
                    <ol
                        className={componentClassNames}
                        key={key}
                    >
                        {renderListItems(nestedChildren)}
                    </ol>
                ) : (
                    <ul
                        className={componentClassNames}
                        key={key}
                    >
                        {renderListItems(nestedChildren)}
                    </ul>
                )
            );
        }

        if (isListItem) {
            return (
                <li key={key}>
                    {renderListItems(nestedChildren)}
                </li>
            );
        }

        return isTypeFunction ? functionalType(nestedProps) : renderListItems(nestedChildren);
    });

    return renderListItems([
        {
            props
        }
    ]);
}

ListComponent.displayName = 'ListComponent';

ListComponent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        props: PropTypes.shape({
            children: PropTypes.arrayOf(PropTypes.shape({
                props: PropTypes.shape({
                    value: PropTypes.string
                })
            }))
        })
    })),
    isOrderedList: PropTypes.bool
};

ListComponent.defaultProps = {
    children: [],
    isOrderedList: false
};

export default ListComponent;
