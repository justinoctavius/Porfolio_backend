interface IImageManagerHelper {
  commit(filename: string): void;
  rollback(filename: string): void;
  remove(filename: string): void;
}

export default IImageManagerHelper;
