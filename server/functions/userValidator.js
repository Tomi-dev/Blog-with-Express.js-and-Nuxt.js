exports.validateGivenFields = (username, password) => {

    if(typeof username === 'undefined' || username.trim() === ''){
        return { error: 'Username is required' };
    }
    
    if(typeof password === 'undefined' || password.trim() === '')
        return { error: 'Password is required' };

    return true;
};