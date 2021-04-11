import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import ImageModel from './Image.model';
import UserModel from './User.model';

@Table({ tableName: 'imageUser' })
class ImageUserModel extends Model {
  @ForeignKey(() => ImageModel)
  @Column({ type: DataType.UUID, allowNull: false })
  image_id: string;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.UUID, allowNull: false })
  user_id: string;
}

export default ImageUserModel;
