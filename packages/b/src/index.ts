import { add } from '@leason/a';
import md5 from 'md5';

export default (): void => {
  console.log(md5('Hello world!'));
};
console.log(add(1, 2));
