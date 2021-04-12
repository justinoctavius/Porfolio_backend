import { v4 } from 'uuid';
import { ITechnology, Technology } from '../../domain/entities';
import Service from './Service';

class TechnologyService extends Service<ITechnology> {
  constructor({ technologyRepository, technologyMapper }) {
    super(technologyRepository, technologyMapper);
  }
  async addAsync({ name, level }): Promise<object> {
    try {
      const techExits = await this._repository.getByName(name);
      if (techExits) return this._response.response('Tech already exits', 500);
      const tech = new Technology(name, level, v4());
      const techAdded = await this._repository.addAsync(tech);
      return this._response.response('success', 200, techAdded);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to add', 500);
    }
  }
  async updateAsync(id: string, { name, level }): Promise<object> {
    try {
      const tech = new Technology(name, level, id);
      const techUpdated = await this._repository.updateAsync(tech);
      if (!techUpdated) return this._response.response('Not found', 404);
      return this._response.response('success', 200, techUpdated);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to update', 500);
    }
  }
}

export default TechnologyService;
