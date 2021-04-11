import IImage from '../interfaces/IImage';
import ILink from '../interfaces/ILink';
import IProject from '../interfaces/IProject';
import ITechnology from '../interfaces/ITechnology';

class Project implements IProject {
  project_id: string;
  name: string;
  date: number;
  technologies: ITechnology[];
  links: ILink[];
  images: IImage[];

  constructor(
    name: string,
    date: number,
    technologies: ITechnology[],
    images: IImage[],
    links: ILink[],
    project_id: string
  ) {
    this.name = name;
    this.date = date;
    this.technologies = technologies;
    this.links = links;
    this.images = images;
    this.project_id = project_id;
  }
}

export default Project;
