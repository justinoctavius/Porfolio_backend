import { Request, Response } from 'express';
import { IWorkService } from '../../../service';
import { IWorkController } from '../interfaces';

class WorkController implements IWorkController {
  private _workService: IWorkService;
  constructor({ workService }) {
    this._workService = workService;
  }
  async getAllAsync(req: Request, res: Response): Promise<void> {}
  async getOneAsync(req: Request, res: Response): Promise<void> {}
  async deleteAsync(req: Request, res: Response): Promise<void> {}
  async addAsync(req: Request, res: Response): Promise<void> {}
  async updateAsync(req: Request, res: Response): Promise<void> {}
}

export default WorkController;
