import { Request, Response } from 'express';
import { IService } from '../../../service/interfaces';
import { IWorkController } from '../interfaces';

class WorkController implements IWorkController {
  private _workService: IService;
  constructor({ workService }) {
    this._workService = workService;
  }
  async getAllAsync(req: Request, res: Response): Promise<void> {
    const response: any = await this._workService.getAllAsync();
    res.status(response.status).json(response);
  }
  async getOneAsync(req: Request, res: Response): Promise<void> {
    const { work_id } = req.params;
    const response: any = await this._workService.getOneAsync(work_id);
    res.status(response.status).json(response);
  }
  async deleteAsync(req: Request, res: Response): Promise<void> {
    const { work_id } = req.params;
    const response: any = await this._workService.deleteAsync(work_id);
    res.status(response.status).json(response);
  }
  async addAsync(req: Request, res: Response): Promise<void> {
    const { user_id } = req.params;
    const { name, date, description } = req.body;
    const response: any = await this._workService.addAsync({
      user_id,
      name,
      date,
      description,
    });
    res.status(response.status).json(response);
  }
  async updateAsync(req: Request, res: Response): Promise<void> {
    const { work_id } = req.params;
    const { name, date, description } = req.body;
    const response: any = await this._workService.updateAsync(work_id, {
      name,
      date,
      description,
    });
    res.status(response.status).json(response);
  }
}

export default WorkController;
