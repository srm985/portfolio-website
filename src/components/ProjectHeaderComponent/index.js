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
                demoCTA,
                projectDate,
                projectDemoURL,
                projectDescription,
                projectHeroImageBlock: {
                    imageAlt = '',
                    imageSource: {
                        childImageSharp: {
                            fluid = {}
                        } = {}
                    } = {}
                } = {},
                projectSourceCodeURL,
                projectTitle,
                role,
                sourceCodeCTA
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
                        alt={imageAlt}
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
                            />
                            <div className={`${displayName}__details`}>
                                <span>{role}</span>
                                {this.renderDate(projectDate)}
                            </div>
                            <p className={'mb--4'}>{projectDescription}</p>
                            {
                                projectDemoURL && (
                                    <Button
                                        href={projectDemoURL}
                                        isInternalURL={false}
                                        label={demoCTA}
                                        styleType={BUTTON_STYLE_TYPE_SECONDARY}
                                    />
                                )
                            }
                            {
                                projectSourceCodeURL && (
                                    <Button
                                        href={projectSourceCodeURL}
                                        isInternalURL={false}
                                        label={sourceCodeCTA}
                                        styleType={BUTTON_STYLE_TYPE_SECONDARY}
                                    />
                                )
                            }
                        </Card>
                    </GridItem>
                </Grid>
            </header>
        );
    }
}

ProjectHeaderComponent.displayName = 'ProjectHeaderComponent';

ProjectHeaderComponent.propTypes = {
    demoCTA: PropTypes.string,
    projectDate: PropTypes.string,
    projectDemoURL: PropTypes.string,
    projectDescription: PropTypes.string,
    projectHeroImageBlock: PropTypes.shape({
        imageAlt: PropTypes.string,
        imageOpacity: PropTypes.number,
        imageSource: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        })
    }),
    projectSourceCodeURL: PropTypes.string,
    projectTitle: PropTypes.string,
    role: PropTypes.string,
    sourceCodeCTA: PropTypes.string
};

ProjectHeaderComponent.defaultProps = {
    demoCTA: '',
    projectDate: '',
    projectDemoURL: '',
    projectDescription: '',
    projectHeroImageBlock: {},
    projectSourceCodeURL: '',
    projectTitle: '',
    role: '',
    sourceCodeCTA: ''
};

export default ProjectHeaderComponent;
