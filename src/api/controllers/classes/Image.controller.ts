import { Request, Response } from 'express';
import { IService } from '../../../services';
import { IController } from '../interfaces';

class ImageController implements IController {
  private _imageService: IService;
  constructor({ imageService }) {
    this._imageService = imageService;
  }
  async getAllAsync(req: Request, res: Response): Promise<void> {
    const response: any = await this._imageService.getAllAsync();
    res.status(response.status).json(response);
  }
  async getOneAsync(req: Request, res: Response): Promise<void> {
    const { image_id } = req.params;
    const response: any = await this._imageService.getOneAsync(image_id);
    res.status(response.status).json(response);
  }
  async deleteAsync(req: Request, res: Response): Promise<void> {
    const { image_id } = req.params;
    const response: any = await this._imageService.deleteAsync(image_id);
    res.status(response.status).json(response);
  }
  async addAsync(req: Request, res: Response): Promise<void> {
    const { name } = req.body;
    const url = req.file.filename;
    console.log(name, url);
    const response: any = await this._imageService.addAsync({
      name,
      url,
    });
    res.status(response.status).json(response);
  }
  async updateAsync(req: Request, res: Response): Promise<void> {
    const { image_id } = req.params;
    const { name, url } = req.body;
    const newUrl = req.file.filename;
    const response: any = await this._imageService.updateAsync(image_id, {
      name,
      url,
      newUrl,
    });
    res.status(response.status).json(response);
  }
}

export default ImageController;
