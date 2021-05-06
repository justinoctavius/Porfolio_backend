import { JWTUtils } from '../../utils';

class JWTMiddleware {
  static verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
      const token = bearerHeader.split(' ')[1];
      const isValid = JWTUtils.isValid(token);

      if (!isValid) {
        res
          .json({
            msg: 'token invalid!',
            payload: null,
            status: 500,
          })
          .status(500);
      }

      next();
    } else {
      res
        .json({
          msg: 'You have to sing in first!',
          payload: null,
          status: 500,
        })
        .status(500);
    }
  }
}

export default JWTMiddleware;
