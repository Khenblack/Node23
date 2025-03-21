import { Logger, ConsoleLogger } from '@khenblack/packages-test/logger';

const getHello = (): void => {
    const logger: Logger = new ConsoleLogger();
    logger.info('Hello World!');
};

export { getHello };
