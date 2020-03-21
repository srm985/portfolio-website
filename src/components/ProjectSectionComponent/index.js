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
                projectSectionBody = '',
                projectSectionImageBlock: {
                    imageAlt = '',
                    imageSource: {
                        childImageSharp: {
                            fluid = {}
                        } = {}
                    } = {}
                } = {},
                projectSectionTitle = ''
            } = projectSection;

            const {
                displayName
            } = ProjectSectionComponent;

            const sectionImageClassNames = classNames(
                `${displayName}__section-image`,
                'mb--6'
            );

            const sectionBodyClassNames = classNames(
                `${displayName}__section-body`,
                'article',
                'mb--8'
            );

            return (
                <React.Fragment key={projectSectionTitle}>
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
                        <Image
                            alt={imageAlt}
                            className={sectionImageClassNames}
                            fluid={fluid}
                        />
                        <TextBlock
                            className={sectionBodyClassNames}
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
        projectSectionImageBlock: PropTypes.shape({
            imageAlt: PropTypes.string,
            imageOpacity: PropTypes.number,
            imageSource: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                    fluid: PropTypes.shape({})
                })
            })
        }),
        projectSectionTitle: PropTypes.string
    }))
};

ProjectSectionComponent.defaultProps = {
    projectSectionList: []
};

export default ProjectSectionComponent;
