import IMapper from '../domain/mappers/IMapper';

class ResponseUtil<T> {
  public readonly _mapper: IMapper<T>;
  constructor(mapper: IMapper<T>) {
    this._mapper = mapper;
  }

  response = (msg: string, status: number = 200, payload?: T) => {
    let dto: object;
    if (payload) {
      dto = this._mapper.toDto(payload);
    }
    return { msg, payload: dto, status };
  };
}

export default ResponseUtil;
