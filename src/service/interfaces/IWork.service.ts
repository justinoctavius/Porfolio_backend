interface IWorkService {
  getAllAsync(): Promise<void>;
  getOneAsync(work_id: string): Promise<void>;
  deleteAsync(work_id: string): Promise<void>;
  addAsync(work: object): Promise<void>;
  updateAsync(work_id: string, work: object): Promise<void>;
}

export default IWorkService;
