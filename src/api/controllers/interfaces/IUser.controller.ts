import { Request, Response } from 'express';

interface IUserController {
  signinAsync(req: Request, res: Response): Promise<void>;
  getUserByIdAsync(req: Request, res: Response): Promise<void>;
}

export default IUserController;
