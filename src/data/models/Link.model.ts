import {
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import ILinkModel from './interfaces/ILink.model';
import ProjectModel from './Project.model';

@Table({ tableName: 'link' })
class LinkModel extends Model implements ILinkModel {
  @Column({ type: DataType.UUID, allowNull: false, primaryKey: true })
  link_id: string;

  @Column({ allowNull: false })
  url: string;

  @Column({ allowNull: false })
  name: string;

  @ForeignKey(() => ProjectModel)
  @Column({ type: DataType.UUID, allowNull: false })
  project_id: string;

  @BelongsTo(() => ProjectModel, 'project_id')
  project: ProjectModel;
}

export default LinkModel;
