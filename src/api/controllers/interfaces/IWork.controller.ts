import { Request, Response } from 'express';

interface IWorkController {
  getAllAsync(req: Request, res: Response): Promise<void>;
  getOneAsync(req: Request, res: Response): Promise<void>;
  deleteAsync(req: Request, res: Response): Promise<void>;
  addAsync(req: Request, res: Response): Promise<void>;
  updateAsync(req: Request, res: Response): Promise<void>;
}

export default IWorkController;
