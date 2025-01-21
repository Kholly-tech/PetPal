const resSender = (res, code, message, status, data = null) => {
    return res.status(code).json({
        status,
        message,
        data
    });
}

module.exports = {
    resSender
}