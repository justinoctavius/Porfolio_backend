import ILink from '../interfaces/ILink';

class Link implements ILink {
  url: string;
  name: string;
  link_id: string;
  project_id: string;

  constructor(
    name: string,
    url: string,
    link_id: string,
    project_id: string = ''
  ) {
    this.name = name;
    this.url = url;
    this.link_id = link_id;
    this.project_id = project_id;
  }
}

export default Link;
