import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Card from '../CardComponent';
import Grid from '../GridComponent';
import GridItem from '../GridItemComponent';
import Title from '../TitleComponent';

import classNames from '../../utils/classNames';

import {
    BUTTON_STYLE_TYPE_SECONDARY
} from '../ButtonComponent/config';

import './styles.scss';

class ProjectHeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: true
        };
    }

    renderDate = (date) => {
        const projectDate = new Date(date);

        const monthLookup = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        const {
            [projectDate.getMonth()]: projectMonth
        } = monthLookup;

        return (
            <span>{`${projectMonth} ${projectDate.getFullYear()}`}</span>
        );
    }

    render() {
        const {
            props: {
                projectDate,
                projectDescription,
                projectHeroImage: {
                    childImageSharp: {
                        fluid = {}
                    } = {}
                } = {},
                projectTitle,
                role
            },
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = ProjectHeaderComponent;

        const contentClassNames = classNames(
            `${displayName}__content`,
            {
                [`${displayName}__content--visible`]: isVisible
            }
        );

        return (
            <header className={displayName}>
                <div className={`${displayName}__background`}>
                    <div className={`${displayName}__section-half`} />
                    <Image
                        alt={'alt'}
                        className={`${displayName}__section-half`}
                        fluid={fluid}
                    />
                </div>
                <Grid>
                    <GridItem
                        breakpoints={{
                            medium: {
                                start: 1,
                                stop: 8
                            }
                        }}
                    >
                        <Card className={contentClassNames}>
                            <Title
                                className={`${displayName}__title`}
                                heading={projectTitle}
                                headingSize={1}
                                isUnaccented
                            />
                            <div className={`${displayName}__details`}>
                                <span>{role}</span>
                                {this.renderDate(projectDate)}
                            </div>
                            <p className={'mb--4'}>{projectDescription}</p>
                            <Button
                                label={'Demo'}
                                styleType={BUTTON_STYLE_TYPE_SECONDARY}
                            />
                            <Button
                                label={'Source Code'}
                                styleType={BUTTON_STYLE_TYPE_SECONDARY}
                            />
                        </Card>
                    </GridItem>
                </Grid>
            </header>
        );
    }
}

ProjectHeaderComponent.displayName = 'ProjectHeaderComponent';

ProjectHeaderComponent.propTypes = {
    projectDate: PropTypes.string,
    projectDescription: PropTypes.string,
    projectHeroImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({})
        })
    }),
    projectTitle: PropTypes.string,
    role: PropTypes.string
};

ProjectHeaderComponent.defaultProps = {
    projectDate: '',
    projectDescription: '',
    projectHeroImage: {},
    projectTitle: '',
    role: ''
};

export default ProjectHeaderComponent;
