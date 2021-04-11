import IImage from './IImage';
import ILink from './ILink';
import ITechnology from './ITechnology';

interface IProject {
  project_id: string;
  name: string;
  date: number;
  links: ILink[];
  images: IImage[];
  technologies: ITechnology[];
}

export default IProject;
