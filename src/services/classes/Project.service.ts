import { v4 } from 'uuid';
import {
  IImage,
  Image,
  IProject,
  ITechnology,
  Project,
  Technology,
} from '../../domain/entities';
import Service from './Service';

class ProjectService extends Service<IProject> {
  constructor({ projectRepository, projectMapper }) {
    super(projectRepository, projectMapper);
  }
  async addAsync({
    name,
    date,
    description,
    images,
    technologies,
    user_id,
  }): Promise<object> {
    try {
      const projectExits = await this._repository.getByName(name);
      if (projectExits) {
        return this._response.response('Project already exist', 500);
      }
      const project = this.getNewProject(
        technologies,
        images,
        name,
        date,
        description,
        user_id
      );
      const projectAdded = await this._repository.addAsync(project);
      return this._response.response('success', 200, projectAdded);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to add', 500);
    }
  }
  async updateAsync(id: string, { name, date, description }): Promise<object> {
    try {
      const project = this.getNewProject(
        [],
        [],
        name,
        date,
        description,
        '',
        id
      );
      const projectUpdated = await this._repository.updateAsync(project);
      if (!projectUpdated) {
        return this._response.response('Project not found', 404);
      }
      return this._response.response('success', 200, projectUpdated);
    } catch (error) {
      console.log(error);
      return this._response.response('Unable to update', 500);
    }
  }
  private getNewProject(
    technologies: string[],
    images: string[],
    name: string,
    date: Date,
    description: string,
    user_id = '',
    project_id: string = v4()
  ): IProject {
    const technologiesDomain: ITechnology[] = technologies.map(
      (tech_id: string) => new Technology('', 0, tech_id)
    );
    const imagesDomain: IImage[] = images.map(
      (image_id: string) => new Image('', '', image_id)
    );
    return new Project(
      name,
      date,
      description,
      technologiesDomain,
      imagesDomain,
      project_id,
      user_id
    );
  }
}

export default ProjectService;
