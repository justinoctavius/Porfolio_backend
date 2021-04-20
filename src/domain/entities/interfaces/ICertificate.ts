import IImage from './IImage';

interface ICertificate {
  study_id: string;
  certificate_id: string;
  name: string;
  image: IImage;
}

export default ICertificate;
