interface IService {
  getAllAsync(): Promise<object>;
  getOneAsync(id: string): Promise<object>;
  deleteAsync(id: string): Promise<object>;
  addAsync(entity: object): Promise<object>;
  updateAsync(id: string, entity: object): Promise<object>;
}

export default IService;
