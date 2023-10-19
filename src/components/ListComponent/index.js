import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

function ListComponent(props) {
    const {
        displayName
    } = ListComponent;

    console.log(props);

    const renderListItems = (childList) => childList.map((childDetails) => {
        const {
            children: nestedChildren,
            key,
            tagName: elementType,
            value
        } = childDetails;

        if (value === '\n') {
            return undefined;
        }

        const isList = elementType === 'ul' || elementType === 'ol';

        // console.log({
        //     childDetails
        // });

        if (isList) {
            const isOrderedList = elementType === 'ol';
            const isShortList = nestedChildren.length <= 14;

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
                    >{renderListItems(nestedChildren)}
                    </ol>
                ) : (
                    <ul
                        className={componentClassNames}
                        key={key}
                    >{renderListItems(nestedChildren)}
                    </ul>
                )
            );
        }

        if (value) {
            if (value === '.') {
                console.log({
                    childDetails
                });
            }
            return (
                <li>{value}</li>
            );
        }

        return renderListItems(nestedChildren);
    }).filter((listItem) => listItem);

    return renderListItems([
        props.node
    ]);
}

ListComponent.displayName = 'ListComponent';

ListComponent.propTypes = {
    node: PropTypes.shape({
        children: PropTypes.arrayOf(PropTypes.shape({
            children: PropTypes.arrayOf(PropTypes.shape({
                type: PropTypes.string,
                value: PropTypes.string
            })),
            tagName: PropTypes.string
        })),
        key: PropTypes.string,
        tagName: PropTypes.string
    })
};

ListComponent.defaultProps = {
    node: {}
};

export default ListComponent;
