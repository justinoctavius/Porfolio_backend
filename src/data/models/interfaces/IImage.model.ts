import ICertificateModel from './ICertificate.model';
import IProjectModel from './IProject.model';
import IUserModel from './IUser.model';

interface IImageModel {
  image_id: string;
  name: string;
  url: string;
  certificate: ICertificateModel;
  projects: IProjectModel[];
  users: IUserModel[];
}

export default IImageModel;
