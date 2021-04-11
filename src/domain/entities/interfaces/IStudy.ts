import ICertificate from './ICertificate';

interface IStudy {
  study_id: string;
  name: string;
  description: string;
  date: number;
  place: string;
  certificate: ICertificate;
}

export default IStudy;
