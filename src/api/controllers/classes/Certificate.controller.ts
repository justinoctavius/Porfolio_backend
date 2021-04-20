import { Request, Response } from 'express';
import { IService } from '../../../services';
import { IController } from '../interfaces';

class CertificateController implements IController {
  private _certificateService: IService;
  constructor({ certificateService }) {
    this._certificateService = certificateService;
  }
  async getAllAsync(req: Request, res: Response): Promise<void> {
    const response: any = await this._certificateService.getAllAsync();
    res.status(response.status).json(response);
  }
  async getOneAsync(req: Request, res: Response): Promise<void> {
    const { certificate_id } = req.params;
    const response: any = await this._certificateService.getOneAsync(
      certificate_id
    );
    res.status(response.status).json(response);
  }
  async deleteAsync(req: Request, res: Response): Promise<void> {
    const { certificate_id } = req.params;
    const response: any = await this._certificateService.deleteAsync(
      certificate_id
    );
    res.status(response.status).json(response);
  }
  async updateAsync(req: Request, res: Response): Promise<void> {
    const { certificate_id } = req.params;
    const { name, image_id } = req.body;
    const response: any = await this._certificateService.updateAsync(
      certificate_id,
      {
        name,
        image_id,
      }
    );
    res.status(response.status).json(response);
  }
  async addAsync(req: Request, res: Response): Promise<void> {
    const { study_id } = req.params;
    const { name, image_id } = req.body;
    const response: any = await this._certificateService.addAsync({
      study_id,
      name,
      image_id,
    });
    res.status(response.status).json(response);
  }
}

export default CertificateController;
