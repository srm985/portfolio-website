import PropTypes from 'prop-types';
import React from 'react';

import SkillPill from '../SkillPillComponent';

import './styles.scss';

const SkillsBlockComponent = (props) => {
    const {
        skillsSectionList
    } = props;

    const {
        displayName
    } = SkillsBlockComponent;

    const renderSkillPill = (skillDetails = {}) => {
        const {
            icon = '',
            label = ''
        } = skillDetails;

        return (
            <SkillPill
                icon={icon}
                key={label}
                label={label}
            />
        );
    };

    const renderSkillsBlock = (skillsBlockDetails = {}) => {
        const {
            sectionLabel = '',
            skillsList = []
        } = skillsBlockDetails;

        return (
            <div
                className={`${displayName}__skills-section-block`}
                key={sectionLabel}
            >
                <h3 className={`${displayName}__skills-section-label`}>{sectionLabel}</h3>
                <div className={`${displayName}__skills-section`}>
                    {
                        skillsList.map(renderSkillPill)
                    }
                </div>
            </div>
        );
    };

    return (
        <div className={displayName}>
            {
                skillsSectionList.map(renderSkillsBlock)
            }
        </div>
    );
};

SkillsBlockComponent.displayName = 'SkillsBlockComponent';

SkillsBlockComponent.propTypes = {
    skillsSectionList: PropTypes.arrayOf(PropTypes.shape({
        sectionLabel: PropTypes.string,
        skillsList: PropTypes.arrayOf(PropTypes.shape({
            icon: PropTypes.string,
            label: PropTypes.string
        }))
    }))
};

SkillsBlockComponent.defaultProps = {
    skillsSectionList: []
};

export default SkillsBlockComponent;
