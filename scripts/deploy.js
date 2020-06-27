/* eslint no-console: 0 */

const Client = require('ftp');

const fs = require('fs');

const TYPE_DIRECTORY = 'd';

const ftp = new Client();

const listDirectory = () => new Promise((resolve, reject) => {
    ftp.list((error, fileList) => {
        if (error) {
            reject(error);
        } else {
            resolve(fileList);
        }
    });
});

const cleanDirectory = async (fileList) => new Promise((resolveAll, rejectAll) => {
    console.log('Clearing directory...');

    const promiseList = fileList.map((element) => new Promise((resolve, reject) => {
        const {
            name,
            type
        } = element;

        if (name !== '.' && name !== '..') {
            if (type === TYPE_DIRECTORY) {
                ftp.rmdir(name, true, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            }

            ftp.delete(name, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        } else {
            resolve();
        }
    }));

    Promise.all([
        ...promiseList
    ]).then(() => {
        resolveAll();
    }).catch(() => {
        rejectAll();
    });
});

const deployApplication = async () => new Promise((resolveAll, rejectAll) => {
    const DEPLOY_DIRECTORY = './public';

    console.log('Deploying application...');

    fs.readdir(DEPLOY_DIRECTORY, (errorDirectoryRead, files) => {
        if (errorDirectoryRead) {
            rejectAll(errorDirectoryRead);
        } else {
            const promiseList = files.map((file) => new Promise((resolve, reject) => {
                fs.readFile(`${DEPLOY_DIRECTORY}/${file}`, (errorFileRead, fileContents) => {
                    if (errorFileRead) {
                        console.log({
                            errorFileRead
                        });
                        reject(errorFileRead);
                    } else {
                        ftp.put(fileContents, file, (errorFilePut) => {
                            if (errorFilePut) {
                                reject(errorFilePut);
                            } else {
                                resolve();
                            }
                        });
                    }
                });
            }));

            const promiseHTAccess = new Promise((resolve, reject) => {
                const FILE_HTACCESS = '.htaccess';

                fs.readFile(FILE_HTACCESS, (errorFileRead, fileContents) => {
                    if (errorFileRead) {
                        reject(errorFileRead);
                    } else {
                        ftp.put(fileContents, FILE_HTACCESS, (errorFilePut) => {
                            if (errorFilePut) {
                                reject(errorFilePut);
                            } else {
                                resolve();
                            }
                        });
                    }
                });
            });

            Promise.all([
                ...promiseList,
                promiseHTAccess
            ]).then(() => {
                resolveAll();
            }).catch(() => {
                rejectAll();
            });
        }
    });
});

const terminateConnection = () => {
    console.log('Terminating connection...');

    ftp.end();
};

const deploy = async () => {
    try {
        console.log('Connection established...');

        const fileList = await listDirectory();

        console.log({
            fileList
        });

        await cleanDirectory(fileList);

        await deployApplication();

        terminateConnection();
    } catch (error) {
        console.error({
            error
        });

        terminateConnection();
    }
};

const {
    env: {
        FTP_HOST,
        FTP_PASSWORD,
        FTP_USERNAME
    }
} = process;

ftp.on('ready', deploy);

console.log('Connecting to server...');

ftp.connect({
    host: FTP_HOST,
    password: FTP_PASSWORD,
    secure: 'control',
    secureOptions: {
        rejectUnauthorized: false
    },
    user: FTP_USERNAME
});
