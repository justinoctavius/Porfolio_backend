import { v4 } from 'uuid';
import Database from '../../data/Database';
import { IImage, Image } from '../../domain/entities';
import { IImageManagerHelper } from '../../helpers';
import Service from './Service';

class ImageService extends Service<IImage> {
  private _imageManagerHelper: IImageManagerHelper;

  constructor({ imageRepository, imageMapper, imageManagerHelper }) {
    super(imageRepository, imageMapper);
    this._imageManagerHelper = imageManagerHelper;
  }

  async addAsync({ name, url }): Promise<object> {
    const t = await Database.sequelize.transaction();
    try {
      const imageExist = await this._repository.getByName(name);
      if (imageExist) {
        t.rollback();
        this._imageManagerHelper.rollback(url);
        return this._response.response('Image already exits', 500);
      }

      const image = new Image(name, url, v4());
      const imageAdded = await this._repository.addAsync(image);

      //confirm changes
      this._imageManagerHelper.commit(url);
      t.commit();

      return this._response.response('success', 200, imageAdded);
    } catch (error) {
      console.log(error);
      t.rollback();
      this._imageManagerHelper.rollback(url);
      return this._response.response('Unable to add', 500);
    }
  }

  async updateAsync(id: string, { name, url, newUrl }): Promise<object> {
    const t = await Database.sequelize.transaction();
    try {
      const image = new Image(name, newUrl, id);
      const imageUpdated = await this._repository.updateAsync(image);

      if (!imageUpdated) {
        t.rollback();
        this._imageManagerHelper.rollback(newUrl);
        return this._response.response('Not found', 404);
      }

      //confirm changes
      this._imageManagerHelper.commit(newUrl);
      this._imageManagerHelper.remove(url);
      t.commit();

      return this._response.response('success', 200, imageUpdated);
    } catch (error) {
      console.log(error);
      t.rollback();
      this._imageManagerHelper.rollback(newUrl);
      return this._response.response('Unable to update', 500);
    }
  }

  async deleteAsync(image_id: string): Promise<object> {
    const t = await Database.sequelize.transaction();
    try {
      const image: IImage = await this._repository.deleteAsync(image_id);
      if (!image) {
        t.rollback();
        return this._response.response('Not found', 404);
      }
      //confirm changes
      this._imageManagerHelper.remove(image.url);
      t.commit();

      return this._response.response('success', 200, image);
    } catch (error) {
      console.log(error);
      t.rollback();
      return this._response.response('Unable to delete', 500);
    }
  }
}

export default ImageService;
