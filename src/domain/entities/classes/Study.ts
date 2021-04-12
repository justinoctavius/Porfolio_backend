import ICertificate from '../interfaces/ICertificate';
import IStudy from '../interfaces/IStudy';

class Study implements IStudy {
  study_id: string;
  user_id: string;
  name: string;
  date: Date;
  description: string;
  certificate: ICertificate;
  place: string;

  constructor(
    name: string,
    date: Date,
    description: string,
    place: string,
    study_id: string,
    user_id: string = '',
    certificate?: ICertificate
  ) {
    this.name = name;
    this.date = date;
    this.description = description;
    this.certificate = certificate;
    this.place = place;
    this.study_id = study_id;
    this.user_id = user_id;
  }
}

export default Study;
