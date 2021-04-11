import { IWork } from '../../../domain/entities';
import { IWorkRepository } from '../interfaces';

class WorkRepository implements IWorkRepository {
  getAllAsync(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getOneAsync(work_id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteAsync(work_id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  addAsync(work: IWork): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateAsync(work: IWork): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default WorkRepository;
