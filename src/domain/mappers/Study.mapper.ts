import { ICertificate, IStudy, Study } from '../entities';
import IMapper from './IMapper';

class StudyMapper implements IMapper<IStudy> {
  private _certificateMapper: IMapper<ICertificate>;
  constructor({ certificateMapper }) {
    this._certificateMapper = certificateMapper;
  }
  toDomain({
    name,
    date,
    description,
    place,
    study_id,
    user_id,
    certificate,
  }): IStudy {
    let certificateDomain: ICertificate;
    if (certificate)
      certificateDomain = this._certificateMapper.toDomain(certificate);
    return new Study(
      name,
      date,
      description,
      place,
      study_id,
      user_id,
      certificateDomain
    );
  }
  toDto(entity: IStudy): object {
    const { name, date, description, place, study_id, certificate } = entity;
    let certificateDto;
    if (certificate)
      certificateDto = this._certificateMapper.toDto(certificate);
    return {
      name,
      date,
      description,
      place,
      study_id,
      certificate: certificateDto,
    };
  }
}

export default StudyMapper;
