import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const GridItemComponent = (props) => {
    const {
        children,
        columns
    } = props;

    const gridClassNames = Object.keys(columns).map((columnSize) => {
        const [
            startColumn,
            stopColumn
        ] = columns[columnSize];

        if (startColumn && stopColumn) {
            return classNames(
                `${GridItemComponent.displayName}__${columnSize}--start-${startColumn}`,
                `${GridItemComponent.displayName}__${columnSize}--stop-${stopColumn}`
            );
        }

        return '';
    }).filter((column) => column.length);

    return (
        <div className={`${GridItemComponent.displayName} ${gridClassNames}`}>
            {children}
        </div>
    );
};

GridItemComponent.displayName = 'GridItemComponent';

GridItemComponent.propTypes = {
    children: PropTypes.node.isRequired,
    columns: PropTypes.shape({
        extraLarge: PropTypes.arrayOf(PropTypes.number),
        large: PropTypes.arrayOf(PropTypes.number),
        medium: PropTypes.arrayOf(PropTypes.number),
        small: PropTypes.arrayOf(PropTypes.number)
    })
};

GridItemComponent.defaultProps = {
    columns: {
        extraLarge: [],
        large: [],
        medium: [],
        small: []
    }
};

export default GridItemComponent;
