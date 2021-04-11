import { IWorkRepository } from '../../data/repositories';
import { IWorkService } from '../interfaces';

class WorkService implements IWorkService {
  private _workRepository: IWorkRepository;
  constructor({ workRepository }) {
    this._workRepository = workRepository;
  }
  getAllAsync(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getOneAsync(work_id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteAsync(work_id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  addAsync(work: object): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateAsync(work_id: string, work: object): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default WorkService;
