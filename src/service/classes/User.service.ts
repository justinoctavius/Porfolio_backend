import { userMapper } from '../../domain/mappers';
import { JWTUtils } from '../../utils';
import { IUserRepository } from '../../data/repositories';
import { IUserService } from '../interfaces';
import { User } from '../../domain/entities/classes';
import * as uuid from 'uuid';
import { IUser } from '../../domain/entities/interfaces';

class UserService implements IUserService {
  private _userRepository: IUserRepository;
  constructor({ userRepository }) {
    this._userRepository = userRepository;
  }

  async signupAsync({ username, email, password }): Promise<Object> {
    try {
      const userExists = await this._userRepository.getUserByEmail(email);
      if (userExists) {
        return { msg: 'user already exits', payload: null, status: 500 };
      }
      const user: IUser = new User(username, email, password, uuid.v4());
      const newUser = await this._userRepository.signupAsync(user);
      if (!newUser) {
        return { msg: 'unable to signup', payload: null, status: 500 };
      }
      const payload = {
        user: userMapper.toDto(newUser),
        token: await JWTUtils.getToken(newUser.user_id),
      };
      return { msg: 'success', payload, status: 200 };
    } catch (error) {
      console.log(error);
      return { msg: 'unable to signup', payload: null, status: 500 };
    }
  }

  async signinAsync(email: string, password: string): Promise<Object> {
    const user = await this._userRepository.signinAsync(email, password);
    if (!user)
      return {
        msg: 'username or password incorrect',
        payload: null,
        status: 500,
      };
    const payload = {
      user: userMapper.toDto(user),
      token: await JWTUtils.getToken(user.user_id),
    };
    return { msg: 'success', payload, status: 200 };
  }

  async getUserByIdAsync(user_id: string): Promise<Object> {
    try {
      const user = await this._userRepository.getUserByIdAsync(user_id);
      if (!user) return { msg: 'user not found', payload: null, status: 404 };
      return { msg: 'success', payload: user, status: 200 };
    } catch (error) {
      console.log(error);
      return { msg: 'unable to get user', payload: null, status: 500 };
    }
  }
}

export default UserService;
