import * as JWT from 'jsonwebtoken';
import env from '../../config/env';

class JWTUtils {
  static async getToken(payload: string) {
    return JWT.sign(payload, env.JWT_SECRET);
  }
  static async isValid(token) {
    return JWT.verify(token, env.JWT_SECRET);
  }
  static decode(token) {
    return JWT.decode(token);
  }
}

export default JWTUtils;
