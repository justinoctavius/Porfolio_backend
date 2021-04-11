import {
  Column,
  Model,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import ProjectModel from './Project.model';
import TechnologyModel from './Technology.model';

@Table({ tableName: 'techProject' })
class TechProjectModel extends Model {
  @Column({ type: DataType.UUID, allowNull: false })
  @ForeignKey(() => TechnologyModel)
  tech_id: string;

  @Column({ type: DataType.UUID, allowNull: false })
  @ForeignKey(() => ProjectModel)
  project_id: string;
}

export default TechProjectModel;
