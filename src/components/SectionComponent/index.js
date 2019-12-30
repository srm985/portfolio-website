import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const SectionComponent = (props) => {
    const {
        children
    } = props;

    const {
        displayName
    } = SectionComponent;

    return (
        <section className={displayName}>
            {
                children
            }
        </section>
    );
};

SectionComponent.displayName = 'SectionComponent';

SectionComponent.propTypes = {
    children: PropTypes.node
};

SectionComponent.defaultProps = {
    children: ''
};

export default SectionComponent;
