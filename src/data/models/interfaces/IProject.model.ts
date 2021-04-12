import IImageModel from './IImage.model';
import ILinkModel from './ILink.model';
import ITechnologyModel from './ITechnology.model';
import IUserModel from './IUser.model';

interface IProjectModel {
  project_id: string;
  user_id: string;
  date: Date;
  name: string;
  links: ILinkModel[];
  images: IImageModel[];
  technologies: ITechnologyModel[];
  user: IUserModel;
}

export default IProjectModel;
