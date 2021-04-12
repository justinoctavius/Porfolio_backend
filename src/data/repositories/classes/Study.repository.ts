import { IStudy } from '../../../domain/entities';
import StudyModel from '../../models/Study.model';
import Repository from './Repository';

class StudyRepository extends Repository<IStudy> {
  constructor({ studyMapper }) {
    super(StudyModel, studyMapper);
  }
  async addAsync(entity: IStudy): Promise<IStudy> {
    const { study_id, name, description, place, date, user_id } = entity;
    const study = await this._model.create({
      user_id,
      study_id,
      name,
      description,
      place,
      date,
    });
    return this._mapper.toDomain(study);
  }
  async updateAsync(entity: IStudy): Promise<IStudy> {
    const { study_id, name, description, place, date } = entity;
    const study: StudyModel = await this._model.findByPk(study_id);
    study.name = name;
    study.description = description;
    study.place = place;
    study.date = date;
    await study.save();
    return this._mapper.toDomain(study);
  }
}

export default StudyRepository;
