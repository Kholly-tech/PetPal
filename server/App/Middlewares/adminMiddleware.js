const { resSender } = require("../Helpers");


const adminMiddleware = async(req, res, next) => {
  try {
    let user = req.user;
    // console.log(user);
    if(!user) return resSender(res, 404, 'User not found', 'fail');

    if(user.role !== 'admin') return resSender(res, 403, 'Unauthorized for this action', 'fail');

    return next();
  } catch (error) {
    console.log(error);    
    return resSender(res, 403, 'Unauthorized for this action', 'fail');
  }
}

module.exports = adminMiddleware;
