import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Grid from '../GridComponent';
import GridItem from '../GridItemComponent';
import Section from '../SectionComponent';
import TextBlock from '../TextBlockComponent';
import Title from '../TitleComponent';

import classNames from '../../utils/classNames';

import './styles.scss';

class ProjectSectionComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };
    }

    renderProjectSection = () => {
        const {
            props: {
                projectSectionList
            }
        } = this;

        return projectSectionList.map((projectSection) => {
            const {
                projectSectionBody,
                projectSectionImage: {
                    childImageSharp: {
                        fluid
                    } = {}
                },
                projectSectionTitle
            } = projectSection;

            const {
                displayName
            } = ProjectSectionComponent;

            return (
                <React.Fragment key={projectSectionTitle}>
                    <GridItem
                        breakpoints={{
                            large: {
                                start: 2,
                                stop: 12
                            },
                            medium: {
                                start: 2,
                                stop: 12
                            }
                        }}
                    >
                        <Image
                            alt={'alt'}
                            className={`${displayName}__section-image`}
                            fluid={fluid}
                        />
                    </GridItem>
                    <GridItem
                        breakpoints={{
                            large: {
                                start: 3,
                                stop: 11
                            },
                            medium: {
                                start: 2,
                                stop: 12
                            }
                        }}
                    >
                        <Title
                            className={'mb--3'}
                            heading={projectSectionTitle}
                            headingSize={2}
                            isAccented
                            isAnimated
                        />
                        <TextBlock
                            className={`${displayName}__section-body`}
                            isAnimated
                            text={projectSectionBody}
                        />
                    </GridItem>
                </React.Fragment>
            );
        });
    }

    render() {
        const {
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = ProjectSectionComponent;

        const componentClassNames = classNames(
            displayName,
            {
                [`${displayName}--visible`]: isVisible
            }
        );

        return (
            <Section className={componentClassNames}>
                <Grid>
                    {this.renderProjectSection()}
                </Grid>
            </Section>
        );
    }
}

ProjectSectionComponent.displayName = 'ProjectSectionComponent';

ProjectSectionComponent.propTypes = {
    projectSectionList: PropTypes.arrayOf(PropTypes.shape({
        projectSectionBody: PropTypes.string,
        projectSectionImage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        }),
        projectSectionTitle: PropTypes.string
    }))
};

ProjectSectionComponent.defaultProps = {
    projectSectionList: []
};

export default ProjectSectionComponent;
