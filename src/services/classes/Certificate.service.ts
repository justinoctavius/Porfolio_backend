import { v4 } from 'uuid';
import { Certificate, ICertificate, Image } from '../../domain/entities';
import Service from './Service';

class CertificateService extends Service<ICertificate> {
  constructor({ certificateRepository, certificateMapper }) {
    super(certificateRepository, certificateMapper);
  }

  async addAsync({ name, study_id, image_id }): Promise<object> {
    try {
      const certificateExist = await this._repository.getByName(name);
      if (certificateExist) {
        return this._response.response('Certificate already exist', 500);
      }
      const image = new Image('', '', image_id);
      const certificate = new Certificate(name, v4(), study_id, image);
      const certificateAdded = await this._repository.addAsync(certificate);
      return this._response.response('success', 200, certificateAdded);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to add', 500);
    }
  }
  async updateAsync(id: string, { name, image_id }): Promise<object> {
    try {
      const image = new Image('', '', image_id);
      const certificate = new Certificate(name, id, '', image);
      const certificateUpdated = await this._repository.updateAsync(
        certificate
      );
      if (!certificateUpdated) {
        return this._response.response('Certificate not found', 404);
      }
      return this._response.response('success', 200, certificateUpdated);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to update', 500);
    }
  }
}

export default CertificateService;
