import PropTypes from 'prop-types';
import React from 'react';

import Button from '../components/ButtonComponent';
import Card from '../components/CardComponent';
import Grid from '../components/GridComponent';
import Form from '../components/FormComponent';
import GridItem from '../components/GridItemComponent';
import Hero from '../components/HeroComponent';
import Input from '../components/InputComponent';
import Title from '../components/TitleComponent';

import {
    BUTTON_STYLE_TYPE_NEUMORPHIC,
    BUTTON_TYPE_SUBMIT
} from '../components/ButtonComponent/config';
import {
    INPUT_TYPE_EMAIL,
    INPUT_TYPE_TEXTAREA
} from '../components/InputComponent/config';

const ContactPageTemplate = (props) => {
    const {
        content: {
            contactCardTitle = '',
            heroImageBlock,
            heroTitle = ''
        }
    } = props;

    const {
        displayName
    } = ContactPageTemplate;

    return (
        <Hero
            className={displayName}
            heroImageBlock={heroImageBlock}
        >
            <Grid>
                <GridItem
                    breakpoints={{
                        large: {
                            start: 1,
                            stop: 6
                        }
                    }}
                >
                    <Title
                        className={'mb--4'}
                        heading={heroTitle}
                        headingSize={1}
                    />
                </GridItem>
                <GridItem
                    breakpoints={{
                        large: {
                            start: 7,
                            stop: 12
                        },
                        medium: {
                            start: 5,
                            stop: 12
                        }
                    }}
                >
                    <Card>
                        <Title
                            className={'color-blue'}
                            heading={contactCardTitle}
                            headingSize={2}
                        />
                        <Form name={'contact-form'}>
                            <Input
                                className={'mb--2'}
                                isRequired
                                label={'Name'}
                                name={'name'}
                            />
                            <Input
                                className={'mb--2'}
                                isRequired
                                label={'Email'}
                                name={'email'}
                                type={INPUT_TYPE_EMAIL}
                            />
                            <Input
                                className={'mb--2'}
                                label={'Company'}
                                name={'company'}
                            />
                            <Input
                                className={'mb--6'}
                                isRequired
                                label={'Message'}
                                name={'message'}
                                type={INPUT_TYPE_TEXTAREA}
                            />
                            <Button
                                isAlignedRight
                                isAnimated
                                isLightBackgroundColorProfile
                                label={'Submit'}
                                styleType={BUTTON_STYLE_TYPE_NEUMORPHIC}
                                type={BUTTON_TYPE_SUBMIT}
                            />
                        </Form>
                    </Card>
                </GridItem>
            </Grid>
        </Hero>
    );
};

ContactPageTemplate.displayName = 'ContactPageTemplate';

ContactPageTemplate.propTypes = {
    content: PropTypes.shape({
        contactCardTitle: PropTypes.string,
        heroImageBlock: PropTypes.shape({}),
        heroTitle: PropTypes.string
    })
};

ContactPageTemplate.defaultProps = {
    content: {}
};

export default ContactPageTemplate;
