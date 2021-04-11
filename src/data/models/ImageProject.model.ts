import {
  Column,
  Model,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import ImageModel from './Image.model';
import ProjectModel from './Project.model';

@Table({ tableName: 'imageProject' })
class ImageProjectModel extends Model {
  @ForeignKey(() => ImageModel)
  @Column({ type: DataType.UUID, allowNull: false })
  image_id: string;

  @ForeignKey(() => ProjectModel)
  @Column({ type: DataType.UUID, allowNull: false })
  project_id: string;
}

export default ImageProjectModel;
