import { ILink, Link } from '../entities';
import IMapper from './IMapper';

class LinkMapper implements IMapper<ILink> {
  toDomain({ name, url, link_id, project_id }): ILink {
    return new Link(name, url, link_id, project_id);
  }
  toDto(entity: ILink): object {
    const { name, url, link_id, project_id } = entity;
    return { name, url, link_id, project_id };
  }
}

export default LinkMapper;
