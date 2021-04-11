import { IUser } from '../../../domain/entities/';

interface IUserRepository {
  signinAsync(email: string, password: string): Promise<IUser>;
  getUserByIdAsync(user_id: string): Promise<IUser>;
  signupAsync(user: IUser): Promise<IUser>;
  getUserByEmail(email: string): Promise<IUser>;
}

export default IUserRepository;
