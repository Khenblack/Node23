// import { subpath1 } from '@khenblack/packages-test/subpath1';

import { getHello } from './console';

// const getHello = (): void => {
//     subpath1();
//     console.info('Hello World!');
// };

(async () => {
    const result = await getHello();
})();
