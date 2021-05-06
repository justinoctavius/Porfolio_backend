import { UserMapper } from '../../../domain/mappers';
import { CryptUtil } from '../../../utils';
import UserModel from '../../models/User.model';
import { IUserRepository } from '../interfaces';
import { IUser } from '../../../domain/entities';

class UserRepository implements IUserRepository {
  private _userMapper: UserMapper;
  constructor({ userMapper }) {
    this._userMapper = userMapper;
  }

  async getUserByIdAsync(user_id: string): Promise<IUser> {
    try {
      const user = await UserModel.findByPk(user_id);
      if (!user) return null;
      return this._userMapper.toDomain(user);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async signinAsync(email: string, password: string): Promise<IUser> {
    try {
      const user = await this.getUserByEmail(email);
      if (!user) return null;
      if (!CryptUtil.compare(password, user.password)) return null;
      return this._userMapper.toDomain(user);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async signupAsync(user: IUser): Promise<IUser> {
    try {
      const newUser = await UserModel.create({
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        password: user.password,
        current_url_image: user.current_url_image,
      });
      return this._userMapper.toDomain(newUser);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async getUserByEmail(email: string): Promise<IUser> {
    try {
      const user = await UserModel.findOne({
        where: { email },
      });
      if (!user) return null;
      return this._userMapper.toDomain(user);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default UserRepository;
