import { ICertificate, Certificate, IImage } from '../entities';
import IMapper from './IMapper';

class CertificateMapper implements IMapper<ICertificate> {
  private _imageMapper: IMapper<IImage>;
  constructor({ imageMapper }) {
    this._imageMapper = imageMapper;
  }
  toDomain({ name, certificate_id, study_id, image }): ICertificate {
    let imageDomain: IImage;
    if (image) imageDomain = this._imageMapper.toDomain(image);
    return new Certificate(name, certificate_id, study_id, imageDomain);
  }
  toDto(entity: ICertificate): object {
    const { name, certificate_id, image } = entity;
    let imageDto;
    if (image) imageDto = this._imageMapper.toDto(image);
    return { name, certificate_id, image: imageDto };
  }
}

export default CertificateMapper;
