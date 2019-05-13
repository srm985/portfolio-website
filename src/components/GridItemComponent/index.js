import PropTypes from 'prop-types';
import React from 'react';

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
            return `${GridItemComponent.displayName}__${columnSize}--start-${startColumn} ${GridItemComponent.displayName}__${columnSize}--stop-${stopColumn}`;
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
        extraLarge: PropTypes.shape([]),
        large: PropTypes.shape([]),
        medium: PropTypes.shape([]),
        small: PropTypes.shape([])
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
