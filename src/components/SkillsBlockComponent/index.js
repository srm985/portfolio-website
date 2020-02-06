import PropTypes from 'prop-types';
import React from 'react';

import Input from '../InputComponent';
import SkillPill from '../SkillPillComponent';

import {
    INPUT_TYPE_SEARCH
} from '../InputComponent/config';

import './styles.scss';

class SkillsBlockComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skillSearchKeyword: ''
        };
    }

    handleSkillSearchKeywordChange=(event) => {
        const {
            target: {
                value: skillSearchKeyword
            }
        } = event;

        this.setState({
            skillSearchKeyword
        });
    }

    renderSkillPill = (skillDetails = {}) => {
        const {
            state: {
                skillSearchKeyword
            }
        } = this;

        const {
            icon = '',
            label = ''
        } = skillDetails;

        const doesSkillFilterMatch = label.toLowerCase().includes(skillSearchKeyword.toLowerCase());

        return (
            doesSkillFilterMatch && (
                <SkillPill
                    icon={icon}
                    key={label}
                    label={label}
                />
            )
        );
    }

    renderSkillsBlock = (skillsBlockDetails = {}) => {
        const {
            sectionLabel = '',
            skillsList = []
        } = skillsBlockDetails;

        const {
            displayName
        } = SkillsBlockComponent;

        const generatedSkillPills = skillsList.map(this.renderSkillPill).filter((skill) => !!skill);

        return (
            <div
                className={`${displayName}__skills-section-block`}
                key={sectionLabel}
            >
                <h4 className={`${displayName}__skills-section-label`}>{sectionLabel}</h4>
                <div className={`${displayName}__skills-section`}>
                    {
                        generatedSkillPills.length ? (
                            generatedSkillPills
                        ) : (
                            <p>Sorry, no relevant skills found...</p>
                        )
                    }
                </div>
            </div>
        );
    }

    render() {
        const {
            props: {
                skillsSectionList
            }
        } = this;

        const {
            displayName
        } = SkillsBlockComponent;

        return (
            <div className={displayName}>
                <h3 className={`${displayName}__title`}>{'Do I have the skills you need?'}</h3>
                <Input
                    handleChange={this.handleSkillSearchKeywordChange}
                    label={'Find a skill!'}
                    name={'skillSearchbar'}
                    placeholder={'Search'}
                    type={INPUT_TYPE_SEARCH}
                />
                {
                    skillsSectionList.map(this.renderSkillsBlock)
                }
            </div>
        );
    }
}

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
