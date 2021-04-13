import { IImage } from '../../../domain/entities';
import ImageModel from '../../models/Image.model';
import Repository from './Repository';

class ImageRepository extends Repository<IImage> {
  constructor({ imageMapper }) {
    super(ImageModel, imageMapper);
  }

  async addAsync(entity: IImage): Promise<IImage> {
    const { name, url, image_id } = entity;
    const image = await this._model.create({ name, url, image_id });
    return this._mapper.toDomain(image);
  }
  async updateAsync(entity: IImage): Promise<IImage> {
    const { name, url, image_id } = entity;
    const image = await this._model.findByPk(image_id);
    if (!image) return null;
    image.name = name;
    image.url = url;
    await image.save();
    return this._mapper.toDomain(image);
  }
}

export default ImageRepository;
