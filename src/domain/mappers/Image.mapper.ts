import { IImage, Image } from '../entities';
import IMapper from './IMapper';

class ImageMapper implements IMapper<IImage> {
  toDomain({ name, url, image_id }): IImage {
    return new Image(name, url, image_id);
  }
  toDto(entity: IImage): object {
    const { name, url, image_id } = entity;
    return { name, url, image_id };
  }
}

export default ImageMapper;
