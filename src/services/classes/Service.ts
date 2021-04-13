import IRepository from '../../data/repositories/interfaces/IRepository';
import IMapper from '../../domain/mappers/IMapper';
import { ResponseUtil } from '../../utils';
import { IService } from '../interfaces';

abstract class Service<T> implements IService {
  protected _repository: IRepository<T>;
  protected _response: ResponseUtil<T>;

  constructor(repository: IRepository<T>, mapper: IMapper<T>) {
    this._repository = repository;
    this._response = new ResponseUtil(mapper);
  }

  async getAllAsync(): Promise<Object> {
    try {
      const entities: T[] = await this._repository.getAllAsync();
      const entitiesDto = entities.map((entity) =>
        this._response._mapper.toDto(entity)
      );
      return { msg: 'success', payload: entitiesDto, status: 200 };
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to get', 500);
    }
  }
  async getOneAsync(id: string): Promise<object> {
    try {
      const entity: T = await this._repository.getOneAsync(id);
      if (!entity) return this._response.response('Not found', 404);
      return this._response.response('success', 200, entity);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to get', 500);
    }
  }
  async deleteAsync(id: string): Promise<object> {
    try {
      const entity: T = await this._repository.deleteAsync(id);
      if (!entity) return this._response.response('Not found', 404);
      return this._response.response('success', 200, entity);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to delete', 500);
    }
  }
  abstract addAsync(entity: object): Promise<object>;

  abstract updateAsync(id: string, entity: object): Promise<object>;
}

export default Service;
