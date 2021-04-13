import { Router } from 'express';
import { ImageMiddleware } from '../middlewares';

export default function ({ imageController }) {
  const route = Router();

  route.get('/', (req, res) => imageController.getAllAsync(req, res));
  route.get('/:image_id', (req, res) => imageController.getOneAsync(req, res));
  route.delete('/:image_id', (req, res) =>
    imageController.deleteAsync(req, res)
  );
  route.put('/:image_id', ImageMiddleware.multer(), (req, res) =>
    imageController.updateAsync(req, res)
  );
  route.post('/', ImageMiddleware.multer(), (req, res) =>
    imageController.addAsync(req, res)
  );

  return route;
}
