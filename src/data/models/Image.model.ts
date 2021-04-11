import {
  Column,
  Model,
  Table,
  DataType,
  BelongsToMany,
  HasOne,
} from 'sequelize-typescript';
import CertificateModel from './Certificate.model';
import ImageProjectModel from './ImageProject.model';
import ImageUserModel from './ImageUser.model';
import IImageModel from './interfaces/IImage.model';
import ProjectModel from './Project.model';
import UserModel from './User.model';

@Table({ tableName: 'image', timestamps: true })
class ImageModel extends Model implements IImageModel {
  @Column({ type: DataType.UUID, allowNull: false, primaryKey: true })
  image_id: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  url: string;

  //certificate relation
  @HasOne(() => CertificateModel)
  certificate: CertificateModel;

  //projects relation
  @BelongsToMany(() => ProjectModel, () => ImageProjectModel)
  projects: ProjectModel[];

  //user relation
  @BelongsToMany(() => UserModel, () => ImageUserModel)
  users: UserModel[];
}

export default ImageModel;
