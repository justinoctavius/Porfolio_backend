import * as fs from 'fs';
import * as path from 'path';
import { IImageManagerHelper } from '../interfaces/';

class ImageManagerHelper implements IImageManagerHelper {
  commit(filename) {
    const publicPath = path.join(__dirname, '..', '..', 'assets');
    fs.renameSync(
      path.join(publicPath, 'temp', filename),
      path.join(publicPath, 'upload', filename)
    );
  }

  rollback(filename) {
    const publicPath = path.join(__dirname, '..', '..', 'assets');
    fs.unlinkSync(path.join(publicPath, 'temp', filename));
  }

  remove(filename) {
    const publicPath = path.join(__dirname, '..', '..', 'assets');
    fs.unlinkSync(path.join(publicPath, 'upload', filename));
  }
}

export default ImageManagerHelper;
