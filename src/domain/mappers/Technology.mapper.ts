import { ITechnology, Technology } from '../entities';
import IMapper from './IMapper';

class TechnologyMapper implements IMapper<ITechnology> {
  toDomain({ name, level, tech_id }): ITechnology {
    return new Technology(name, level, tech_id);
  }
  toDto(entity: ITechnology): object {
    const { name, level, tech_id } = entity;
    return { name, level, tech_id };
  }
}

export default TechnologyMapper;
