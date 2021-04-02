module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        {
            options: {
                name: 'images',
                path: `${__dirname}/static/assets`
            },
            resolve: 'gatsby-source-filesystem'
        },
        {
            options: {
                name: 'content',
                path: `${__dirname}/static/content`
            },
            resolve: 'gatsby-source-filesystem'
        },
        'gatsby-transformer-remark',
        {
            options: {
                plugins: [
                    {
                        options: {
                            maxWidth: 800
                        },
                        resolve: 'gatsby-remark-images'
                    }
                ]
            },
            resolve: 'gatsby-transformer-sharp'
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-svg',
        {
            options: {
                background_color: '#262626',
                display: 'minimal-ui',
                icon: 'src/assets/icons/logo.png',
                name: 'Portfolio | Sean McQuay',
                short_name: 'Portfolio | Sean McQuay',
                start_url: '/',
                theme_color: '#262626'
            },
            resolve: 'gatsby-plugin-manifest'
        },
        {
            options: {
                anonymize: true,
                cookieDomain: 'auto',
                head: false,
                respectDNT: true,
                trackingId: 'UA-86885981-1'
            },
            resolve: 'gatsby-plugin-google-analytics'
        },
        {
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`
            },
            resolve: 'gatsby-plugin-netlify-cms'
        },
        {
            options: {
                cmsConfig: '/static/admin/config.yml'
            },
            resolve: 'gatsby-plugin-netlify-cms-paths'
        }
    ],
    siteMetadata: {
        author: 'Sean McQuay',
        defaultTitle: 'Portfolio Website',
        description: 'A website dedicated to some of the projects I have completed over the years.',
        image: '',
        keywords: 'web development, front-end development',
        postingTitle: 'Sean McQuay - Front-End Developer',
        siteURL: 'https://www.seanmcquay.com',
        titleTemplate: 'Sean McQuay | {pageTitle}',
        type: 'website'
    }
};
