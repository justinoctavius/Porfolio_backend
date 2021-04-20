import ICertificate from '../interfaces/ICertificate';
import IImage from '../interfaces/IImage';

class Certificate implements ICertificate {
  study_id: string;
  name: string;
  image: IImage;
  certificate_id: string;

  constructor(
    name: string,
    certificate_id: string,
    study_id: string = '',
    image: IImage = null
  ) {
    this.name = name;
    this.study_id = study_id;
    this.image = image;
    this.certificate_id = certificate_id;
  }
}

export default Certificate;
