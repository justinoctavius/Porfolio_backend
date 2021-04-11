import {
  Model,
  Table,
  DataType,
  Column,
  BelongsToMany,
} from 'sequelize-typescript';
import ITechnologyModel from './interfaces/ITechnology.model';
import ProjectModel from './Project.model';
import TechProjectModel from './TechProject.model';

@Table({ tableName: 'technology' })
class TechnologyModel extends Model implements ITechnologyModel {
  @Column({ type: DataType.UUID, allowNull: false, primaryKey: true })
  tech_id: string;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  level: number;

  @BelongsToMany(() => ProjectModel, () => TechProjectModel)
  projects: ProjectModel[];
}
export default TechnologyModel;
