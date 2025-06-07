const userCreationSuccess = {
    responseCode: 201,
    message: 'User created!'
}


const userCreationFailedEmailParam = {
    responseCode: 400,
    message: 'Bad request, email parameter is missing in DELETE request.',
};


const userCreationFailedEmailExists = {
    responseCode: 400,
    message: 'Email already exists!',
};

const userDeletionSuccess = {
    responseCode: 200,
    message: 'Account deleted!',
};

const loginErrorUserNotFound = {
    responseCode: 404,
    message: 'User not found!'
}
const userDeleteErrorNotFound = {
    responseCode: 400,
    message: 'Bad request, email parameter is missing in DELETE request.'
}

module.exports = {
    userCreationSuccess,
    userCreationFailedEmailExists,
    userDeletionSuccess,
    userCreationFailedEmailParam,
    userDeleteErrorNotFound,
    loginErrorUserNotFound
};