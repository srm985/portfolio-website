import Image from 'gatsby-image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Grid from '../GridComponent';
import GridItem from '../GridItemComponent';
import Section from '../SectionComponent';
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
                    <GridItem
                        breakpoints={{
                            large: {
                                start: 3,
                                stop: 10
                            },
                            medium: {
                                start: 2,
                                stop: 11
                            }
                        }}
                    >
                        <Image
                            alt={'alt'}
                            className={`${displayName}__section-image`}
                            fluid={{}}
                        />
                    </GridItem>
                    <GridItem
                        breakpoints={{
                            extraLarge: {
                                start: 3,
                                stop: 11
                            },
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
                        <Title
                            className={'mb--3'}
                            heading={'Some Import Details'}
                            headingSize={2}
                        />
                        <ReactMarkdown
                            className={`${displayName}__section-body`}
                            source={'Excepteur velit elit voluptate laborum sunt. Aute est proident dolore officia dolor anim sunt laboris sit. Amet reprehenderit excepteur aute sit Lorem magna. Mollit laboris ad eu ut do. Velit enim duis duis laboris.'}
                        />
                    </GridItem>
                </Grid>
            </Section>
        );
    }
}

ProjectSectionComponent.displayName = 'ProjectSectionComponent';

ProjectSectionComponent.propTypes = {};

ProjectSectionComponent.defaultProps = {};

export default ProjectSectionComponent;
