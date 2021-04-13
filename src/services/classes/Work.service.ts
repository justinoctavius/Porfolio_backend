import { IWork, Work } from '../../domain/entities';
import * as uuid from 'uuid';
import Service from './Service';

class WorkService extends Service<IWork> {
  constructor({ workRepository, workMapper }) {
    super(workRepository, workMapper);
  }
  async addAsync({ name, description, date, user_id }): Promise<object> {
    try {
      const workExist: IWork = await this._repository.getByName(name);
      if (workExist) return this._response.response('Work already exists', 500);
      const work = new Work(name, date, description, uuid.v4(), user_id);
      const workAdded = await this._repository.addAsync(work);
      return this._response.response('success', 200, workAdded);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to add the work', 500);
    }
  }
  async updateAsync(
    work_id: string,
    { name, description, date }
  ): Promise<object> {
    try {
      const work: IWork = new Work(name, date, description, work_id);
      const workUpdated = await this._repository.updateAsync(work);
      if (!workUpdated) return this._response.response('Unable to update', 500);
      return this._response.response('success', 200, workUpdated);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to update', 500);
    }
  }
}

export default WorkService;
