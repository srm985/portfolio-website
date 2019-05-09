import React from 'react';
import {
    Link
} from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import './index.scss';

const IndexPage = () => (
    <Layout>
        <SEO
            title={'Home'}
            keywords={[
                'gatsby',
                'application',
                'react'
            ]}
        />
        <h1 className={'test'}>Hi! people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div
            style={{
                marginBottom: '1.45rem',
                maxWidth: '300px'
            }}
        >
            <Image />
        </div>
        <Link to={'/page-2/'}>Go to page 2</Link>
    </Layout>
);

export default IndexPage;
