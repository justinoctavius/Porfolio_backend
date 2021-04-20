import { ILink } from '../../../domain/entities';
import LinkModel from '../../models/Link.model';
import Repository from './Repository';

class LinkRepository extends Repository<ILink> {
  constructor({ linkMapper }) {
    super(LinkModel, linkMapper);
  }
  async addAsync(entity: ILink): Promise<ILink> {
    const { name, url, link_id, project_id } = entity;
    const link = await this._model.create({ name, url, link_id, project_id });
    return this._mapper.toDomain(link);
  }
  async updateAsync(entity: ILink): Promise<ILink> {
    const { name, url, link_id } = entity;
    const link: LinkModel = await this._model.findByPk(link_id);
    if (!link) return null;
    link.name = name;
    link.url = url;
    await link.save();
    return this._mapper.toDomain(link);
  }
}

export default LinkRepository;
