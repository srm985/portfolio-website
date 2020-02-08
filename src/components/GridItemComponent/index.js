import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const COLUMN_PROP_TYPES = PropTypes.shape({
    columns: PropTypes.number,
    start: PropTypes.number,
    stop: PropTypes.number
});

const GridItemComponent = (props) => {
    const {
        breakpoints,
        children
    } = props;

    const {
        displayName
    } = GridItemComponent;

    const gridClassNames = [];

    Object.keys(breakpoints).forEach((columnSize) => {
        const {
            [columnSize]: {
                columns,
                start,
                stop
            } = {}
        } = breakpoints;

        if (columns) {
            gridClassNames.push(`${displayName}__${columnSize}--span-${columns}`);
        } else if (start && stop) {
            gridClassNames.push(`${displayName}__${columnSize}--start-${start} ${displayName}__${columnSize}--stop-${stop}`);
        }
    });

    const componentClassNames = classNames(
        displayName,
        ...gridClassNames
    );

    return (
        <div className={componentClassNames}>
            {children}
        </div>
    );
};

GridItemComponent.displayName = 'GridItemComponent';

GridItemComponent.propTypes = {
    breakpoints: PropTypes.shape({
        extraLarge: COLUMN_PROP_TYPES,
        large: COLUMN_PROP_TYPES,
        medium: COLUMN_PROP_TYPES,
        small: COLUMN_PROP_TYPES
    }),
    children: PropTypes.node.isRequired
};

GridItemComponent.defaultProps = {
    breakpoints: { }
};

export default GridItemComponent;
