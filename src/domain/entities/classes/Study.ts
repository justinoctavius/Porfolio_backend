import ICertificate from '../interfaces/ICertificate';
import IStudy from '../interfaces/IStudy';

class Study implements IStudy {
  study_id: string;
  name: string;
  date: number;
  description: string;
  certificate: ICertificate;
  place: string;

  constructor(
    name: string,
    date: number,
    description: string,
    place: string,
    certificate: ICertificate,
    study_id: string
  ) {
    this.name = name;
    this.date = date;
    this.description = description;
    this.certificate = certificate;
    this.place = place;
    this.study_id = study_id;
  }
}

export default Study;
