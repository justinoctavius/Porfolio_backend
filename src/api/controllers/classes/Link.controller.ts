import { Request, Response } from 'express';
import { IService } from '../../../services';
import { IController } from '../interfaces';

class LinkController implements IController {
  private _linkService: IService;
  constructor({ linkService }) {
    this._linkService = linkService;
  }
  async getAllAsync(req: Request, res: Response): Promise<void> {
    const response: any = await this._linkService.getAllAsync();
    res.status(response.status).json(response);
  }
  async getOneAsync(req: Request, res: Response): Promise<void> {
    const { link_id } = req.params;
    const response: any = await this._linkService.getOneAsync(link_id);
    res.status(response.status).json(response);
  }
  async deleteAsync(req: Request, res: Response): Promise<void> {
    const { link_id } = req.params;
    const response: any = await this._linkService.deleteAsync(link_id);
    res.status(response.status).json(response);
  }
  async addAsync(req: Request, res: Response): Promise<void> {
    const { project_id } = req.params;
    const { name, url } = req.body;
    const response: any = await this._linkService.addAsync({
      project_id,
      name,
      url,
    });
    res.status(response.status).json(response);
  }
  async updateAsync(req: Request, res: Response): Promise<void> {
    const { link_id } = req.params;
    const { name, url } = req.body;
    const response: any = await this._linkService.updateAsync(link_id, {
      name,
      url,
    });
    res.status(response.status).json(response);
  }
}

export default LinkController;
