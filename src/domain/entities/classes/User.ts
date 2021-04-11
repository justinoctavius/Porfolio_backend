import IImage from '../interfaces/IImage';
import IProject from '../interfaces/IProject';
import IStudy from '../interfaces/IStudy';
import IUser from '../interfaces/IUser';
import IWork from '../interfaces/IWork';

class User implements IUser {
  user_id: string;
  username: string;
  email: string;
  password: string;
  current_url_image: string;
  works: IWork[];
  studies: IStudy[];
  images: IImage[];
  projects: IProject[];

  constructor(
    username: string,
    email: string,
    password: string,
    user_id: string,
    current_url_image: string = '',
    works?: IWork[],
    studies?: IStudy[],
    images?: IImage[],
    projects?: IProject[]
  ) {
    this.username = username;
    this.email = email;
    this.user_id = user_id;
    this.password = password;
    this.current_url_image = current_url_image;
    this.works = works;
    this.studies = studies;
    this.images = images;
    this.projects = projects;
  }
}

export default User;
