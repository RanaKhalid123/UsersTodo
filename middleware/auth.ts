let jwt = require('jsonwebtoken');
const config = require('./config.ts');

let isAuthenticated = (req:any, res:any, next:any) => {
  let token = req.headers['token']; // Express headers are auto converted to lowercase
  if(!token || !token.startsWith('Bearer ')){
    return res.status(401).send({
      success: false,
      message: 'Auth token is not supplied',
    });
  }
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, config.secret, (err: any, decoded:any) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: 'Auth token is not correct or expired',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({
      success: false,
      message: 'Auth token is not supplied',
    });
  }
};


module.exports = {
  isAuthenticated: isAuthenticated,
}
