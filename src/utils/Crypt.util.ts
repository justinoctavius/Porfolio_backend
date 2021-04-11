import * as bcrypt from 'bcrypt';

class CryptUtil {
  static hash(password, salt) {
    return bcrypt.hashSync(password, salt);
  }
  static compare(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

export default CryptUtil;
