import IImage from './IImage';
import IProject from './IProject';
import IStudy from './IStudy';
import IWork from './IWork';

interface IUser {
  user_id: string;
  username: string;
  email: string;
  password: string;
  current_url_image: string;
  works: IWork[];
  studies: IStudy[];
  images: IImage[];
  projects: IProject[];
}

export default IUser;
