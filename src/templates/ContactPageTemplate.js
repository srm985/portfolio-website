import PropTypes from 'prop-types';
import React from 'react';

import Button from '../components/ButtonComponent';
import Card from '../components/CardComponent';
import Form from '../components/FormComponent';
import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Hero from '../components/HeroComponent';
import Input from '../components/InputComponent';
import Title from '../components/TitleComponent';

import {
    BUTTON_STYLE_TYPE_NEUMORPHIC,
    BUTTON_TYPE_SUBMIT
} from '../components/ButtonComponent/config';

function ContactPageTemplate(props) {
    const {
        content: {
            contactCardTitle = '',
            formButtonLabel = '',
            formName = '',
            heroImageBlock,
            heroTitle = ''
        }
    } = props;

    const {
        displayName
    } = ContactPageTemplate;

    const renderFormFields = () => {
        const {
            content: {
                contactFormFields = []
            }
        } = props;

        return contactFormFields.map((formField) => {
            const {
                fieldLabel,
                fieldName,
                fieldRequired,
                fieldType
            } = formField;

            return (
                <Input
                    className={'mb--2'}
                    isRequired={fieldRequired}
                    key={fieldName}
                    label={fieldLabel}
                    name={fieldName}
                    type={fieldType}
                />
            );
        });
    };

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
                            stop: 13
                        },
                        medium: {
                            start: 5,
                            stop: 13
                        }
                    }}
                >
                    <Card>
                        <Title
                            className={'color-blue'}
                            heading={contactCardTitle}
                            headingSize={2}
                        />
                        <Form name={formName}>
                            {
                                renderFormFields()
                            }
                            <Button
                                className={'mt--4'}
                                isAlignedRight
                                isAnimated
                                isLightBackgroundColorProfile
                                label={formButtonLabel}
                                styleType={BUTTON_STYLE_TYPE_NEUMORPHIC}
                                type={BUTTON_TYPE_SUBMIT}
                            />
                        </Form>
                    </Card>
                </GridItem>
            </Grid>
        </Hero>
    );
}

ContactPageTemplate.displayName = 'ContactPageTemplate';

ContactPageTemplate.propTypes = {
    content: PropTypes.shape({
        contactCardTitle: PropTypes.string,
        contactFormFields: PropTypes.arrayOf(PropTypes.shape({
            fieldLabel: PropTypes.string,
            fieldName: PropTypes.string,
            fieldRequired: PropTypes.bool,
            fieldType: PropTypes.string
        })),
        formButtonLabel: PropTypes.string,
        formName: PropTypes.string,
        heroImageBlock: PropTypes.shape({}),
        heroTitle: PropTypes.string
    })
};

ContactPageTemplate.defaultProps = {
    content: {}
};

export default ContactPageTemplate;
