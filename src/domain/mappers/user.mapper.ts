import { User } from '../entities/classes';
import IUser from '../entities/interfaces/IUser';

const userMapper: any = {};

userMapper.toDomain = ({
  username,
  email,
  password,
  current_url_image,
  works,
  studies,
  images,
  projects,
  user_id,
}) => {
  const user = new User(
    username,
    email,
    password,
    user_id,
    current_url_image,
    works,
    studies,
    images,
    projects
  );
  return user;
};

userMapper.toDto = (user: IUser) => {
  return {
    username: user.username,
    email: user.email,
    current_url_image: user.current_url_image,
    works: user.works,
    studies: user.studies,
    images: user.images,
    projects: user.projects,
    user_id: user.user_id,
  };
};

export default userMapper;
