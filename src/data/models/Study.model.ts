import {
  Column,
  HasOne,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import CertificateModel from './Certificate.model';
import IStudyModel from './interfaces/IStudy.model';
import UserModel from './User.model';

@Table({ tableName: 'study' })
class StudyModel extends Model implements IStudyModel {
  @Column({ type: DataType.UUID, allowNull: false, primaryKey: true })
  study_id: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ type: DataType.DATE, allowNull: false })
  date: Date;

  @Column({ allowNull: false })
  place: string;

  //certificate relation
  @HasOne(() => CertificateModel)
  certificate: CertificateModel;
  //user relation

  @Column({ type: DataType.UUID, allowNull: false })
  @ForeignKey(() => UserModel)
  user_id: string;

  @BelongsTo(() => UserModel, 'user_id')
  user: UserModel;
}

export default StudyModel;
