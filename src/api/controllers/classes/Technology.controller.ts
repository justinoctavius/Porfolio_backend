import { Request, Response } from 'express';
import { IService } from '../../../services';
import { IController } from '../interfaces';

class TechnologyController implements IController {
  private _technologyService: IService;
  constructor({ technologyService }) {
    this._technologyService = technologyService;
  }

  async getAllAsync(req: Request, res: Response): Promise<void> {
    const response: any = await this._technologyService.getAllAsync();
    res.status(response.status).json(response);
  }
  async getOneAsync(req: Request, res: Response): Promise<void> {
    const { tech_id } = req.params;
    const response: any = await this._technologyService.getOneAsync(tech_id);
    res.status(response.status).json(response);
  }
  async deleteAsync(req: Request, res: Response): Promise<void> {
    const { tech_id } = req.params;
    const response: any = await this._technologyService.deleteAsync(tech_id);
    res.status(response.status).json(response);
  }
  async addAsync(req: Request, res: Response): Promise<void> {
    const { name, level } = req.body;
    const response: any = await this._technologyService.addAsync({
      name,
      level,
    });
    res.status(response.status).json(response);
  }
  async updateAsync(req: Request, res: Response): Promise<void> {
    const { tech_id } = req.params;
    const { name, level } = req.body;
    const response: any = await this._technologyService.updateAsync(tech_id, {
      name,
      level,
    });
    res.status(response.status).json(response);
  }
}

export default TechnologyController;
