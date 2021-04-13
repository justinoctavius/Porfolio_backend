interface IUserService {
  signinAsync(email: string, password: string): Promise<Object>;
  getUserByIdAsync(user_id: string): Promise<Object>;
  signupAsync(user: object): Promise<Object>;
}

export default IUserService;
