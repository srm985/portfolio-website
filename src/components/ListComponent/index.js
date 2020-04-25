import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const ListComponent = (props) => {
    const {
        children,
        isOrderedList
    } = props;

    const {
        displayName
    } = ListComponent;

    const renderedListItems = children.map((listItem) => {
        const {
            key,
            props: {
                children: [
                    {
                        props: {
                            value = ''
                        } = {}
                    } = {}
                ] = []
            } = {}
        } = listItem;

        return (
            <li
                className={`${displayName}__list-item`}
                key={key}
            >
                {value}
            </li>
        );
    });

    const isShortList = children.length <= 10;

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
            <ol className={componentClassNames}>
                {renderedListItems}
            </ol>
        ) : (
            <ul className={componentClassNames}>
                {renderedListItems}
            </ul>
        )
    );
};

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
