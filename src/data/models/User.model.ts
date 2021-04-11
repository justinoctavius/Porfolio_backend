import {
  Model,
  BeforeSave,
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Table,
} from 'sequelize-typescript';
import { CryptUtil } from '../../utils';
import ImageModel from './Image.model';
import ImageUserModel from './ImageUser.model';
import IUserModel from './interfaces/IUser.model';
import ProjectModel from './Project.model';
import StudyModel from './Study.model';
import WorkModel from './Work.model';
import Database from './../Database';

@Table({ tableName: 'user' })
class UserModel extends Model implements IUserModel {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    unique: true,
  })
  user_id: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ type: DataType.STRING })
  current_url_image: string;

  //works relation
  @HasMany(() => WorkModel)
  works: WorkModel[];

  //images relation
  @BelongsToMany(() => ImageModel, () => ImageUserModel)
  images: ImageModel[];

  //projects relation
  @HasMany(() => ProjectModel)
  projects: ProjectModel[];

  //studies relation
  @HasMany(() => StudyModel)
  studies: StudyModel[];

  @BeforeSave
  static encryptPassword(user: IUserModel) {
    user.password = CryptUtil.hash(user.password, 15);
  }
}

export default UserModel;
