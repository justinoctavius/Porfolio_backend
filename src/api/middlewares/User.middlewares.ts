import { JWTUtils } from '../../utils';

class UserMiddleware {
  static async getUserByToken(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1];
    const tokenDecode: any = await JWTUtils.decode(token);
    if (tokenDecode) {
      req.params.user_id = tokenDecode;
      next();
    } else {
      res
        .json({ msg: `token invalid`, payload: null, status: 500 })
        .status(500);
    }
  }
}

export default UserMiddleware;
