import PropTypes from 'prop-types';
import React from 'react';

import Button from '../components/ButtonComponent';
import Hero from '../components/HeroComponent';
import Section from '../components/SectionComponent';
import SkillsBlock from '../components/SkillsBlockComponent';

import {
    BUTTON_STYLE_TYPE_SECONDARY
} from '../components/ButtonComponent/config';
import {
    OVERLAY_BLACK
} from '../components/HeroComponent/config';

const IndexPageTemplate = (props) => {
    const {
        heroImage: {
            childImageSharp: {
                fluid
            } = {}
        } = {},
        heroSubtitle,
        heroTitle
    } = props;

    const placeholder = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K';

    return (
        <>
            <Hero
                alt={'placeholder image'}
                defaultSource={fluid}
                overlayColor={OVERLAY_BLACK}
            >
                <h1 className={'mb--2'}>{heroTitle}</h1>
                <h2 className={'mb--5'}>{heroSubtitle}</h2>
                <Button
                    label={'Résumé'}
                    styleType={BUTTON_STYLE_TYPE_SECONDARY}
                />
                <Button
                    label={'Contact Me'}
                    styleType={BUTTON_STYLE_TYPE_SECONDARY}
                />
            </Hero>
            <Section>
                <SkillsBlock
                    skillsSectionList={[
                        {
                            sectionLabel: 'Development Tools',
                            skillsList: [
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                },
                                {
                                    icon: placeholder,
                                    label: 'ReactJS'
                                }
                            ]
                        }
                    ]}
                />
            </Section>
        </>
    );
};

IndexPageTemplate.propTypes = {
    heroImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({})
        })
    }),
    heroSubtitle: PropTypes.string,
    heroTitle: PropTypes.string
};

IndexPageTemplate.defaultProps = {
    heroImage: {},
    heroSubtitle: '',
    heroTitle: ''
};

export default IndexPageTemplate;
