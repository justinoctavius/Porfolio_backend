import { Request, Response } from 'express';
import { IService } from '../../../service';
import { IController } from '../interfaces';

class StudyController implements IController {
  private _studyService: IService;
  constructor({ studyService }) {
    this._studyService = studyService;
  }

  async getAllAsync(req: Request, res: Response): Promise<void> {
    const response: any = await this._studyService.getAllAsync();
    res.status(response.status).json(response);
  }
  async getOneAsync(req: Request, res: Response): Promise<void> {
    const { study_id } = req.params;
    const response: any = await this._studyService.getOneAsync(study_id);
    res.status(response.status).json(response);
  }
  async deleteAsync(req: Request, res: Response): Promise<void> {
    const { study_id } = req.params;
    const response: any = await this._studyService.deleteAsync(study_id);
    res.status(response.status).json(response);
  }
  async addAsync(req: Request, res: Response): Promise<void> {
    const { user_id } = req.params;
    const { place, name, date, description } = req.body;
    const response: any = await this._studyService.addAsync({
      user_id,
      place,
      name,
      date,
      description,
    });
    res.status(response.status).json(response);
  }
  async updateAsync(req: Request, res: Response): Promise<void> {
    const { study_id } = req.params;
    const { place, name, date, description } = req.body;
    const response: any = await this._studyService.updateAsync(study_id, {
      place,
      name,
      date,
      description,
    });
    res.status(response.status).json(response);
  }
}

export default StudyController;
