import { Request, Response } from 'express';
import { IService } from '../../../services';
import { IController } from '../interfaces';

class ProjectController implements IController {
  private _projectService: IService;
  constructor({ projectService }) {
    this._projectService = projectService;
  }
  async getAllAsync(req: Request, res: Response): Promise<void> {
    const response: any = await this._projectService.getAllAsync();
    res.status(response.status).json(response);
  }
  async getOneAsync(req: Request, res: Response): Promise<void> {
    const { project_id } = req.params;
    const response: any = await this._projectService.getOneAsync(project_id);
    res.status(response.status).json(response);
  }
  async deleteAsync(req: Request, res: Response): Promise<void> {
    const { project_id } = req.params;
    const response: any = await this._projectService.deleteAsync(project_id);
    res.status(response.status).json(response);
  }
  async updateAsync(req: Request, res: Response): Promise<void> {
    const { project_id } = req.params;
    const { name, date } = req.body;
    const response: any = await this._projectService.updateAsync(project_id, {
      name,
      date,
    });
    res.status(response.status).json(response);
  }
  async addAsync(req: Request, res: Response): Promise<void> {
    const { user_id } = req.params;
    const { name, date, images, technologies } = req.body;
    const response: any = await this._projectService.addAsync({
      user_id,
      name,
      date,
      images,
      technologies,
    });
    res.status(response.status).json(response);
  }
}

export default ProjectController;
