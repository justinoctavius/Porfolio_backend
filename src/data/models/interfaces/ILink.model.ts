import IProjectModel from './IProject.model';

interface ILinkModel {
  link_id: string;
  project_id: string;
  url: string;
  name: string;
  project: IProjectModel;
}

export default ILinkModel;
