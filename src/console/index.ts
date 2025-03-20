import { subpath1 } from '@khenblack/packages-test/subpath1';

const getHello = (): void => {
    subpath1();
    console.info('Hello World!');
};

export { getHello };
