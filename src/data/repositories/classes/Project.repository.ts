import { IProject } from '../../../domain/entities';
import ImageProjectModel from '../../models/ImageProject.model';
import ProjectModel from '../../models/Project.model';
import TechProjectModel from '../../models/TechProject.model';
import Repository from './Repository';

class ProjectRepository extends Repository<IProject> {
  constructor({ projectMapper }) {
    super(ProjectModel, projectMapper, ['images', 'links', 'technologies']);
  }
  async addAsync(entity: IProject): Promise<IProject> {
    const { name, date, project_id, images, technologies, user_id } = entity;
    const project = await this._model.create({
      name,
      date,
      project_id,
      user_id,
    });
    images.map(async (image) => {
      return await ImageProjectModel.create({
        image_id: image.image_id,
        project_id,
      });
    });
    technologies.map(
      async (tech) =>
        await TechProjectModel.create({ tech_id: tech.tech_id, project_id })
    );
    return this._mapper.toDomain(project);
  }
  async updateAsync(entity: IProject): Promise<IProject> {
    const { name, date, project_id } = entity;
    const project: ProjectModel = await this._model.findByPk(project_id, {
      include: this._include,
    });
    if (!project) return null;
    project.name = name;
    project.date = date;
    await project.save();
    return this._mapper.toDomain(project);
  }
}

export default ProjectRepository;
