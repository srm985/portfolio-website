import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const COLUMN_PROP_TYPES = PropTypes.shape({
    columns: PropTypes.number,
    leftOffset: PropTypes.number,
    rightOffset: PropTypes.number,
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
    const leftOffsetClassList = [];
    const rightOffsetClassList = [];

    Object.keys(breakpoints).forEach((breakpointSize) => {
        const {
            [breakpointSize]: {
                columns,
                leftOffset,
                rightOffset,
                start,
                stop
            } = {}
        } = breakpoints;

        // Handle sizing of primary element.
        if (columns) {
            gridClassNames.push(`${displayName}__${breakpointSize}--span-${columns}`);
        } else if (start && stop) {
            gridClassNames.push(`${displayName}__${breakpointSize}--start-${start} ${displayName}__${breakpointSize}--stop-${stop}`);
        }

        // Handle generating any offset classes.
        if (typeof leftOffset === 'number') {
            leftOffsetClassList.push(`${displayName}__${breakpointSize}--left-offset-${leftOffset}`);
        }
        if (typeof rightOffset === 'number') {
            rightOffsetClassList.push(`${displayName}__${breakpointSize}--right-offset-${rightOffset}`);
        }
    });

    const componentClassNames = classNames(
        displayName,
        ...gridClassNames
    );

    const leftOffsetClassNames = classNames(
        `${displayName}__offset`,
        `${displayName}__offset--left`,
        ...leftOffsetClassList
    );
    const rightOffsetClassNames = classNames(
        `${displayName}__offset`,
        `${displayName}__offset--typeof right`,
        ...rightOffsetClassList
    );

    return (
        <>
            <div className={leftOffsetClassNames} />
            <div className={componentClassNames}>
                {children}
            </div>
            <div className={rightOffsetClassNames} />
        </>
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
