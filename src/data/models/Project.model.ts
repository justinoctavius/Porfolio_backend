import {
  Column,
  Model,
  DataType,
  HasMany,
  Table,
  ForeignKey,
  BelongsToMany,
  BelongsTo,
} from 'sequelize-typescript';
import ImageModel from './Image.model';
import ImageProjectModel from './ImageProject.model';
import IProjectModel from './interfaces/IProject.model';
import LinkModel from './Link.model';
import TechnologyModel from './Technology.model';
import TechProjectModel from './TechProject.model';
import UserModel from './User.model';

@Table({ tableName: 'project' })
class ProjectModel extends Model implements IProjectModel {
  @Column({ type: DataType.UUID, allowNull: false, primaryKey: true })
  project_id: string;

  @Column({ allowNull: false })
  date: number;

  @Column({ allowNull: false })
  name: string;

  //link relation
  @HasMany(() => LinkModel)
  links: LinkModel[];

  //images relation
  @BelongsToMany(() => ImageModel, () => ImageProjectModel)
  images: ImageModel[];

  //technologies relation
  @BelongsToMany(() => TechnologyModel, () => TechProjectModel)
  technologies: TechnologyModel[];

  //user relation
  @ForeignKey(() => UserModel)
  @Column({ type: DataType.UUID, allowNull: false })
  user_id: string;

  @BelongsTo(() => UserModel)
  user: UserModel;
}

export default ProjectModel;
