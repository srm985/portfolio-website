import React from 'react';

import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Layout from '../components/LayoutComponent';

const tempStyles = {
    backgroundColor: 'red',
    height: '50px'
};

const IndexPage = () => (
    <Layout>
        <h1>Hello world!</h1>
        <Grid>
            <GridItem columns={{
                small: [
                    1,
                    7
                ]
            }}
            >
                <div style={tempStyles} />
            </GridItem>
            <GridItem columns={{
                small: [
                    7,
                    13
                ]
            }}
            >
                <div style={tempStyles} />
            </GridItem>
            <GridItem columns={{
                medium: [
                    1,
                    7
                ]
            }}
            >
                <div style={tempStyles} />
            </GridItem>
            <GridItem columns={{
                medium: [
                    7,
                    13
                ]
            }}
            >
                <div style={tempStyles} />
            </GridItem>
        </Grid>
    </Layout>
);

export default IndexPage;
