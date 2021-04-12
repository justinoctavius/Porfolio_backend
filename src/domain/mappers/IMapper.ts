interface IMapper<T> {
  toDomain(entity: object): T;
  toDto(entity: T): object;
}

export default IMapper;
