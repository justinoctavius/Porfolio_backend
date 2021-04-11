import IUserModel from './IUser.model';

interface IWorkModel {
  work_id: string;
  user_id: string;
  name: string;
  date: number;
  description: string;
  user: IUserModel;
}

export default IWorkModel;
