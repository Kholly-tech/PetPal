const saveCookie = (res, name, value, options = {}) => {
    res.cookie(name, value, {
        httpOnly: true,
        sameSite: 'strict',
        secure: 'true',
        options
    });
};

const getCookie = (req, cookieName) => {
    const cookieHeader = req.headers.cookie;
    if(!cookieHeader) return null;
    const cookies = {};

    cookieHeader.split(';').forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        cookies[name] = decodeURIComponent(value);
    });

    return cookies[cookieName];
}

module.exports = {
    saveCookie,
    getCookie,
}