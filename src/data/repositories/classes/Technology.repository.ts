import { ITechnology } from '../../../domain/entities';
import TechnologyModel from '../../models/Technology.model';
import Repository from './Repository';

class TechnologyRepository extends Repository<ITechnology> {
  constructor({ technologyMapper }) {
    super(TechnologyModel, technologyMapper);
  }
  async addAsync(entity: ITechnology): Promise<ITechnology> {
    const { name, level, tech_id } = entity;
    const tech = await this._model.create({ name, level, tech_id });
    return this._mapper.toDomain(tech);
  }
  async updateAsync(entity: ITechnology): Promise<ITechnology> {
    const { name, level, tech_id } = entity;
    const tech = await this._model.findByPk(tech_id);
    if (!tech) return null;
    tech.name = name;
    tech.level = level;
    await tech.save();
    return this._mapper.toDomain(tech);
  }
}

export default TechnologyRepository;
