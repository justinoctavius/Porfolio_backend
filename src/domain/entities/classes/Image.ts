import IImage from '../interfaces/IImage';

class Image implements IImage {
  name: string;
  image_id: string;
  url: string;

  constructor(name: string, url: string, image_id: string) {
    this.name = name;
    this.url = url;
    this.image_id = image_id;
  }
}

export default Image;
