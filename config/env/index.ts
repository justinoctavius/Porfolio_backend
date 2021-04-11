import dev from './dev';
import pro from './pro';

let current_env: any;

if (process.env.NODE_ENV === 'pro') {
  current_env = pro;
} else {
  current_env = dev;
}

export default current_env;
