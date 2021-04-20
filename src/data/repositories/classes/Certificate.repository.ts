import { ICertificate } from '../../../domain/entities';
import CertificateModel from '../../models/Certificate.model';
import Repository from './Repository';

class certificateRepository extends Repository<ICertificate> {
  constructor({ certificateMapper }) {
    super(CertificateModel, certificateMapper, ['image']);
  }

  async addAsync(entity: ICertificate): Promise<ICertificate> {
    const { certificate_id, image, name } = entity;
    const certificate = await this._model.create({
      study_id: entity.study_id,
      name,
      certificate_id,
      image_id: image.image_id,
    });
    return this._mapper.toDomain(certificate);
  }
  async updateAsync(entity: ICertificate): Promise<ICertificate> {
    const { certificate_id, name, image } = entity;
    const certificate: CertificateModel = await this._model.findByPk(
      certificate_id
    );
    if (!certificate) return null;
    certificate.name = name;
    certificate.image_id = image.image_id;

    await certificate.save();
    return this._mapper.toDomain(certificate);
  }
}

export default certificateRepository;
