import IImageModel from './IImage.model';
import IStudyModel from './IStudy.model';

interface ICertificateModel {
  image_id: string;
  study_id: string;
  certificate_id: string;
  name: string;
  image: IImageModel;
  study: IStudyModel;
}

export default ICertificateModel;
