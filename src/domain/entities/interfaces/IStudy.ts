import ICertificate from './ICertificate';

interface IStudy {
  study_id: string;
  user_id: string;
  name: string;
  description: string;
  date: Date;
  place: string;
  certificate: ICertificate;
}

export default IStudy;
