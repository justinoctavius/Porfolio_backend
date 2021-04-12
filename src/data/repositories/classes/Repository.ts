import IMapper from '../../../domain/mappers/IMapper';
import { IRepository } from '../interfaces';

abstract class Repository<T> implements IRepository<T> {
  protected _model: any;
  protected _mapper: IMapper<T>;
  constructor(model: any, mapper: IMapper<T>) {
    this._mapper = mapper;
    this._model = model;
  }

  async getAllAsync(): Promise<T[]> {
    const entity = await this._model.findAll();
    return entity.map((work) => this._mapper.toDomain(work));
  }
  async getOneAsync(id: string): Promise<T> {
    const entity = await this._model.findByPk(id);
    return this._mapper.toDomain(entity);
  }
  async deleteAsync(id: string): Promise<T> {
    const entity = await this._model.findByPk(id);
    await entity.destroy();
    return this._mapper.toDomain(entity);
  }
  async getByName(name: string): Promise<T> {
    const entity = await this._model.findOne({ where: { name } });
    if (!entity) return null;
    return this._mapper.toDomain(entity);
  }
  abstract addAsync(entity: T): Promise<T>;
  abstract updateAsync(entity: T): Promise<T>;
}

export default Repository;
