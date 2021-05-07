import IImage from '../interfaces/IImage';
import ILink from '../interfaces/ILink';
import IProject from '../interfaces/IProject';
import ITechnology from '../interfaces/ITechnology';

class Project implements IProject {
  project_id: string;
  name: string;
  date: Date;
  description: string;
  technologies: ITechnology[];
  links: ILink[];
  images: IImage[];
  user_id: string;

  constructor(
    name: string,
    date: Date,
    description: string,
    technologies: ITechnology[],
    images: IImage[],
    project_id: string,
    user_id: string,
    links: ILink[] = []
  ) {
    this.name = name;
    this.date = date;
    this.description = description;
    this.technologies = technologies;
    this.links = links;
    this.images = images;
    this.user_id = user_id;
    this.project_id = project_id;
  }
}

export default Project;
