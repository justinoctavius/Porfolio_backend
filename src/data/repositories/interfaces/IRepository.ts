interface IRepository<T> {
  getAllAsync(): Promise<T[]>;
  getOneAsync(id: string): Promise<T>;
  deleteAsync(id: string): Promise<T>;
  addAsync(entity: T): Promise<T>;
  updateAsync(entity: T): Promise<T>;
  getByName(name: string): Promise<T>;
}

export default IRepository;
