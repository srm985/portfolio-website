const injector = (tokenizedString = '', tokenList = {}) => {
    let injectedString = tokenizedString;

    Object.keys(tokenList).forEach((tokenKey) => {
        const {
            [tokenKey]: tokenValue
        } = tokenList;

        injectedString = injectedString.replace(`{${tokenKey}}`, tokenValue);
    });

    return injectedString;
};

export default injector;
