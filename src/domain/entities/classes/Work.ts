import IWork from '../interfaces/IWork';

class Work implements IWork {
  work_id: string;
  name: string;
  date: number;
  description: string;
  constructor(
    name: string,
    date: number,
    description: string,
    work_id: string
  ) {
    this.work_id = work_id;
    this.name = name;
    this.date = date;
    this.description = description;
  }
}

export default Work;
