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
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-svg',
        {
            options: {
                background_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/assets/icons/logo.png',
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                theme_color: '#663399'
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
        description: 'A website dedicated to some of the projects I have completed over the years.',
        title: 'Portfolio Website'
    }
};
