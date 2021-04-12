import { JWTUtils, ResponseUtil } from '../../utils';
import { IUserRepository } from '../../data/repositories';
import { IUserService } from '../interfaces';
import { User, IUser } from '../../domain/entities/';
import * as uuid from 'uuid';

class UserService implements IUserService {
  private _userRepository: IUserRepository;
  private _response: ResponseUtil<IUser>;

  constructor({ userRepository, userMapper }) {
    this._userRepository = userRepository;
    this._response = new ResponseUtil(userMapper);
  }

  async signupAsync({ username, email, password }): Promise<Object> {
    try {
      const userExists = await this._userRepository.getUserByEmail(email);
      if (userExists) return this._response.response('user already exits', 500);

      const user: IUser = new User(username, email, password, uuid.v4());

      const newUser = await this._userRepository.signupAsync(user);
      if (!newUser) return this._response.response('unable to signup', 500);

      const payload = {
        user: this._response._mapper.toDto(newUser),
        token: await JWTUtils.getToken(newUser.user_id),
      };

      return { msg: 'success', payload, status: 200 };
    } catch (error) {
      console.log(error);
      return this._response.response('unable to signup', 500);
    }
  }

  async signinAsync(email: string, password: string): Promise<Object> {
    const user = await this._userRepository.signinAsync(email, password);
    if (!user)
      return this._response.response('Username or password incorrect', 500);

    const payload = {
      user: this._response._mapper.toDto(user),
      token: await JWTUtils.getToken(user.user_id),
    };
    return { msg: 'success', payload, status: 200 };
  }

  async getUserByIdAsync(user_id: string): Promise<Object> {
    try {
      const user = await this._userRepository.getUserByIdAsync(user_id);
      if (!user) return this._response.response('User not found', 404);
      return this._response.response('success', 200, user);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to get user', 500);
    }
  }
}

export default UserService;
