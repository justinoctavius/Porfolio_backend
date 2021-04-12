import IWork from '../interfaces/IWork';

class Work implements IWork {
  work_id: string;
  user_id: string;
  name: string;
  date: Date;
  description: string;
  constructor(
    name: string,
    date: Date,
    description: string,
    work_id: string,
    user_id?: string
  ) {
    this.work_id = work_id;
    this.name = name;
    this.date = date;
    this.description = description;
    this.user_id = user_id;
  }
}

export default Work;
