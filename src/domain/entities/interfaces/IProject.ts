import IImage from './IImage';
import ILink from './ILink';
import ITechnology from './ITechnology';

interface IProject {
  project_id: string;
  name: string;
  date: Date;
  description: string;
  links: ILink[];
  images: IImage[];
  technologies: ITechnology[];
  user_id: string;
}

export default IProject;
