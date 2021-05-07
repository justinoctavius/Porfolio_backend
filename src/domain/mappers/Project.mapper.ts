import {
  IProject,
  Project,
  IImage,
  ILink,
  ITechnology,
  Technology,
} from '../entities';
import IMapper from './IMapper';

class ProjectMapper implements IMapper<IProject> {
  private _imageMapper: IMapper<IImage>;
  private _linkMapper: IMapper<ILink>;
  private _technologyMapper: IMapper<ITechnology>;
  constructor({ imageMapper, linkMapper, technologyMapper }) {
    this._imageMapper = imageMapper;
    this._linkMapper = linkMapper;
    this._technologyMapper = technologyMapper;
  }
  toDomain({
    name,
    date,
    description,
    technologies,
    images,
    links,
    project_id,
    user_id,
  }): IProject {
    let imagesDomain: IImage[] = this.getImagesDomain(images);
    let technologiesDomain: ITechnology[] = this.getTechnologiesDomain(
      technologies
    );
    let linksDomain: ILink[] = this.getLinksDomain(links);

    return new Project(
      name,
      date,
      description,
      technologiesDomain,
      imagesDomain,
      project_id,
      user_id,
      linksDomain
    );
  }

  private getTechnologiesDomain(technologies: object[]): ITechnology[] {
    if (technologies && technologies.length > 0) {
      return technologies.map((tech) => this._technologyMapper.toDomain(tech));
    }
    return [];
  }

  private getImagesDomain(images: object[]): IImage[] {
    if (images && images.length > 0) {
      return images.map((image) => this._imageMapper.toDomain(image));
    }
    return [];
  }

  private getLinksDomain(links: object[]): ILink[] {
    if (links && links.length > 0) {
      return links.map((link) => this._linkMapper.toDomain(link));
    }
    return [];
  }

  toDto(entity: IProject): object {
    const {
      name,
      date,
      description,
      images,
      links,
      project_id,
      technologies,
      user_id,
    } = entity;
    let imagesDto: object[] = this.getImagesDto(images);
    let technologiesDto: object[] = this.getTechnologiesDto(technologies);
    let linksDto: object[] = this.getLinksDto(links);
    return {
      user_id,
      project_id,
      name,
      date,
      description,
      images: imagesDto,
      links: linksDto,
      technologies: technologiesDto,
    };
  }

  private getTechnologiesDto(technologies: ITechnology[]): object[] {
    if (technologies.length > 0) {
      return technologies.map((tech) => this._technologyMapper.toDto(tech));
    }
    return [];
  }

  private getImagesDto(images: IImage[]): object[] {
    if (images.length > 0) {
      return images.map((image) => this._imageMapper.toDto(image));
    }
    return [];
  }

  private getLinksDto(links: ILink[]): object[] {
    if (links.length > 0) {
      return links.map((link) => this._linkMapper.toDto(link));
    }
    return [];
  }
}

export default ProjectMapper;
