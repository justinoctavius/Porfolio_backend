import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import IWorkModel from './interfaces/IWork.model';
import UserModel from './User.model';

@Table({ tableName: 'work' })
class WorkModel extends Model implements IWorkModel {
  @Column({ type: DataType.UUID, allowNull: false, primaryKey: true })
  work_id: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  date: Date;

  @Column({ allowNull: false })
  description: string;

  //user relation
  @ForeignKey(() => UserModel)
  @Column({ type: DataType.UUID, allowNull: false })
  user_id: string;

  @BelongsTo(() => UserModel, 'user_id')
  user: UserModel;
}

export default WorkModel;
