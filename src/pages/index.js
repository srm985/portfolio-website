import React from 'react';

import Hero from '../components/HeroComponent';
import Layout from '../components/LayoutComponent';

import {
    OVERLAY_BLACK
} from '../components/HeroComponent/config';

import placeholderImage from '../images/placeholder.png';

const IndexPage = () => (
    <Layout>
        <Hero
            alt={'placeholder image'}
            defaultSource={placeholderImage}
            overlayColor={OVERLAY_BLACK}
        />
    </Layout>
);

export default IndexPage;
