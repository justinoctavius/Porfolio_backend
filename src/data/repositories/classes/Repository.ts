import IMapper from '../../../domain/mappers/IMapper';
import { IRepository } from '../interfaces';

abstract class Repository<T> implements IRepository<T> {
  protected _model: any;
  protected _mapper: IMapper<T>;
  protected _include: string[];
  constructor(model: any, mapper: IMapper<T>, include: string[] = []) {
    this._mapper = mapper;
    this._model = model;
    this._include = include;
  }

  async getAllAsync(): Promise<T[]> {
    const entity = await this._model.findAll({ include: this._include });
    console.log(entity);
    return entity.map((work) => this._mapper.toDomain(work));
  }
  async getOneAsync(id: string): Promise<T> {
    const entity = await this._model.findByPk(id, { include: this._include });
    if (!entity) return null;
    return this._mapper.toDomain(entity);
  }
  async deleteAsync(id: string): Promise<T> {
    const entity = await this._model.findByPk(id, { include: this._include });
    if (!entity) return null;
    await entity.destroy();
    return this._mapper.toDomain(entity);
  }
  async getByName(name: string): Promise<T> {
    const entity = await this._model.findOne({
      where: { name },
      include: this._include,
    });
    if (!entity) return null;
    return this._mapper.toDomain(entity);
  }
  abstract addAsync(entity: T): Promise<T>;
  abstract updateAsync(entity: T): Promise<T>;
}

export default Repository;
