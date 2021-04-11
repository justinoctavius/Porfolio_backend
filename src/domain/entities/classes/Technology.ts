import ITechnology from '../interfaces/ITechnology';

class Technology implements ITechnology {
  tech_id: string;
  name: string;
  level: number;

  constructor(name: string, level: number, tech_id: string) {
    this.name = name;
    this.level = level;
    this.tech_id = tech_id;
  }
}

export default Technology;
