import { ConsoleLogger, Logger } from '@khenblack/packages-test';

const getHello = (): void => {
    const logger: Logger = new ConsoleLogger();
    logger.info('Hello World!');
};

export { getHello };
