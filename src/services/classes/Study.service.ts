import { v4 } from 'uuid';
import { IStudy, Study } from '../../domain/entities';
import Service from './Service';

class StudyService extends Service<IStudy> {
  constructor({ studyRepository, studyMapper }) {
    super(studyRepository, studyMapper);
  }
  async addAsync({ name, description, place, date, user_id }): Promise<object> {
    try {
      const studyExits = await this._repository.getByName(name);
      if (studyExits)
        return this._response.response('Study already exist', 500);
      const study = new Study(name, date, description, place, v4(), user_id);
      const studyAdded = await this._repository.addAsync(study);
      return this._response.response('success', 200, studyAdded);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to add', 500);
    }
  }
  async updateAsync(
    id: string,
    { name, description, place, date }
  ): Promise<object> {
    try {
      const study = new Study(name, date, description, place, id);
      const studyUpdated = await this._repository.updateAsync(study);
      if (!studyUpdated) return this._response.response('Study not found', 404);
      return this._response.response('success', 200, studyUpdated);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to update', 500);
    }
  }
}

export default StudyService;
