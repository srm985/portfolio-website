import PropTypes from 'prop-types';
import React from 'react';

import Grid from '../GridComponent';
import GridItem from '../GridItemComponent';
import Image from '../ImageComponent';
import Section from '../SectionComponent';
import TextBlock from '../TextBlockComponent';
import Title from '../TitleComponent';

import classNames from '../../utils/classNames';

import {
    BREAKPOINTS_DEFAULT,
    BREAKPOINTS_IMAGE,
    BREAKPOINTS_TEXT,
    IMAGE_ALIGNMENT_FULL,
    IMAGE_ALIGNMENT_OPTIONS
} from './config';

import './styles.scss';

class ProjectSectionComponent extends React.Component {
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
                    imageAlignment = IMAGE_ALIGNMENT_FULL,
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
                `${displayName}__section-image--align-${imageAlignment}`,
                'mb--6'
            );

            const sectionBodyClassNames = classNames(
                `${displayName}__section-body`,
                'article',
                'mb--8'
            );

            const {
                [imageAlignment]: breakpointsText
            } = BREAKPOINTS_TEXT;

            const {
                [imageAlignment]: breakpointsImage
            } = BREAKPOINTS_IMAGE;

            const textGridItemClassNames = classNames(
                `${displayName}__text-grid-item`,
                `${displayName}__text-grid-item--align-${imageAlignment}`
            );

            const imageGridItemClassNames = classNames(
                `${displayName}__image-grid-item`,
                `${displayName}__image-grid-item--align-${imageAlignment}`
            );

            return (
                <Section key={projectSectionTitle}>
                    <Grid>
                        <GridItem breakpoints={BREAKPOINTS_DEFAULT}>
                            <Title
                                className={'mb--3'}
                                heading={projectSectionTitle}
                                headingSize={2}
                                isAccented
                                isAnimated
                            />

                        </GridItem>
                        <GridItem
                            breakpoints={breakpointsImage}
                            className={imageGridItemClassNames}
                        >
                            <Image
                                alt={imageAlt}
                                canViewEnlarged
                                className={sectionImageClassNames}
                                fluid={fluid}
                            />
                        </GridItem>
                        <GridItem
                            breakpoints={breakpointsText}
                            className={textGridItemClassNames}
                        >
                            <TextBlock
                                className={sectionBodyClassNames}
                                isAnimated
                                text={projectSectionBody}
                            />
                        </GridItem>
                    </Grid>
                </Section>
            );
        });
    }

    render() {
        return (
            <>
                {this.renderProjectSection()}
            </>
        );
    }
}

ProjectSectionComponent.displayName = 'ProjectSectionComponent';

ProjectSectionComponent.propTypes = {
    projectSectionList: PropTypes.arrayOf(PropTypes.shape({
        projectSectionBody: PropTypes.string,
        projectSectionImageBlock: PropTypes.shape({
            imageAlignment: PropTypes.oneOf(IMAGE_ALIGNMENT_OPTIONS),
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
