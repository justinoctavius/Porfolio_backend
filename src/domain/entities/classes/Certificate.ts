import ICertificate from '../interfaces/ICertificate';
import IImage from '../interfaces/IImage';

class Certificate implements ICertificate {
  name: string;
  image: IImage;
  certificate_id: string;

  constructor(name: string, image: IImage, certificate_id: string) {
    this.name = name;
    this.image = image;
    this.certificate_id = certificate_id;
  }
}

export default Certificate;
