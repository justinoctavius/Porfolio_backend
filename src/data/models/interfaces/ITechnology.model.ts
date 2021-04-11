import IProjectModel from './IProject.model';

interface ITechnologyModel {
  tech_id: string;
  name: string;
  level: number;
  projects: IProjectModel[];
}

export default ITechnologyModel;
