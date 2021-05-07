import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import ImageModel from './Image.model';
import ICertificateModel from './interfaces/ICertificate.model';
import StudyModel from './Study.model';

@Table({ tableName: 'certificate' })
class CertificateModel extends Model implements ICertificateModel {
  @Column({ type: DataType.UUID, allowNull: false, primaryKey: true })
  certificate_id: string;

  @Column({ allowNull: false })
  name: string;

  //image relation
  @ForeignKey(() => ImageModel)
  @Column({ type: DataType.UUID })
  image_id: string;

  @BelongsTo(() => ImageModel, 'image_id')
  image: ImageModel;

  //study relation
  @ForeignKey(() => StudyModel)
  @Column({ type: DataType.UUID, allowNull: false, unique: true })
  study_id: string;

  @BelongsTo(() => StudyModel, 'study_id')
  study: StudyModel;
}

export default CertificateModel;
