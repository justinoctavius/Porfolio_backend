import { Request, Response } from 'express';
import { IUserController } from '../interfaces';
import { IUserService } from '../../../services';

class UserController implements IUserController {
  private _userService: IUserService;
  constructor({ userService }) {
    this._userService = userService;
  }

  async signinAsync(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    const response: any = await this._userService.signinAsync(email, password);
    res.status(response.status).json(response);
  }

  async getUserByIdAsync(req: Request, res: Response): Promise<void> {
    const { user_id } = req.params;
    const response: any = await this._userService.getUserByIdAsync(user_id);
    res.status(response.status).json(response);
  }
}

export default UserController;
