import IImageModel from './IImage.model';
import IProjectModel from './IProject.model';
import IStudyModel from './IStudy.model';
import IWorkModel from './IWork.model';

interface IUserModel {
  user_id: string;
  username: string;
  email: string;
  password: string;
  current_url_image: string;
  works: IWorkModel[];
  images: IImageModel[];
  projects: IProjectModel[];
  studies: IStudyModel[];
}

export default IUserModel;
