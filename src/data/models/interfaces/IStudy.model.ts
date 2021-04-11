import ICertificateModel from './ICertificate.model';
import IUserModel from './IUser.model';

interface IStudyModel {
  study_id: string;
  user_id: string;
  user: IUserModel;
  name: string;
  description: string;
  date: number;
  place: string;
  certificate: ICertificateModel;
}

export default IStudyModel;
