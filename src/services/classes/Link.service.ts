import { v4 } from 'uuid';
import { Service } from '.';
import { ILink, Link } from '../../domain/entities';

class LinkService extends Service<ILink> {
  constructor({ linkRepository, linkMapper }) {
    super(linkRepository, linkMapper);
  }
  async addAsync({ name, url, project_id }): Promise<object> {
    try {
      const linkExits = await this._repository.getByName(name);
      if (linkExits) return this._response.response('Link already exist', 500);
      const link = new Link(name, url, v4(), project_id);
      const linkAdded = await this._repository.addAsync(link);
      return this._response.response('success', 200, linkAdded);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to add', 500);
    }
  }
  async updateAsync(id: string, { name, url }): Promise<object> {
    try {
      const link = new Link(name, url, id);
      const linkUpdated = await this._repository.updateAsync(link);
      if (!linkUpdated) return this._response.response('Link not found', 404);
      return this._response.response('success', 200, linkUpdated);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to update', 500);
    }
  }
}

export default LinkService;
