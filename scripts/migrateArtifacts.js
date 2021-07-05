const fs = require('fs');

const migrateSitemap = () => {
    const artifactPath = 'public/sitemap/sitemap-0.xml';
    const rootPath = 'public/sitemap.xml';

    fs.rename(artifactPath, rootPath, (error) => {
        if (error) {
            console.error(error);
        }
    });
};

const migrateHTAccess = () => {
    const artifactPath = '.htaccess';
    const rootPath = 'public/.htaccess';

    fs.rename(artifactPath, rootPath, (error) => {
        if (error) {
            console.error(error);
        }
    });
};

migrateSitemap();
migrateHTAccess();
