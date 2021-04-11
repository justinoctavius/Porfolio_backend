import { IWork } from '../../../domain/entities';

interface IWorkRepository {
  getAllAsync(): Promise<void>;
  getOneAsync(work_id: string): Promise<void>;
  deleteAsync(work_id: string): Promise<void>;
  addAsync(work: IWork): Promise<void>;
  updateAsync(work: IWork): Promise<void>;
}

export default IWorkRepository;
