import { IStudy, Study } from '../entities';
import IMapper from './IMapper';

class StudyMapper implements IMapper<IStudy> {
  toDomain({ name, date, description, place, study_id, user_id }): IStudy {
    return new Study(name, date, description, place, study_id, user_id);
  }
  toDto(entity: IStudy): object {
    const { name, date, description, place, study_id } = entity;
    return { name, date, description, place, study_id };
  }
}

export default StudyMapper;
