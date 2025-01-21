const modifyUserResponse = (user) => {
    user.password = undefined;

    return user;
}

module.exports = modifyUserResponse;