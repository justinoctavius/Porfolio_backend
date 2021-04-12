import { IWork, Work } from '../entities';
import IMapper from './IMapper';

class WorkMapper implements IMapper<IWork> {
  toDomain({ name, date, description, work_id }): IWork {
    return new Work(name, date, description, work_id);
  }
  toDto(entity: IWork): object {
    return {
      name: entity.name,
      date: entity.date,
      description: entity.description,
      work_id: entity.work_id,
    };
  }
}

export default WorkMapper;
