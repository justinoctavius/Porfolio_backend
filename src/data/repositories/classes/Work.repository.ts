import { IWork } from '../../../domain/entities';
import WorkModel from '../../models/Work.model';
import Repository from './Repository';

class WorkRepository extends Repository<IWork> {
  constructor({ workMapper }) {
    super(WorkModel, workMapper);
  }
  async addAsync(work: IWork): Promise<IWork> {
    const workAdded = await this._model.create({
      name: work.name,
      description: work.description,
      work_id: work.work_id,
      date: work.date,
      user_id: work.user_id,
    });
    return this._mapper.toDomain(workAdded);
  }
  async updateAsync(work: IWork): Promise<IWork> {
    const workToUpdate = await this._model.findByPk(work.work_id);
    if (!workToUpdate) return null;

    workToUpdate.name = work.name;
    workToUpdate.description = work.description;
    workToUpdate.date = work.date;

    await workToUpdate.save();
    return this._mapper.toDomain(workToUpdate);
  }
}

export default WorkRepository;
