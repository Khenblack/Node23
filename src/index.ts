import { ConsoleLogger, type Logger } from '@khenblack/packages-test';

const getHello = (): void => {
    const logger: Logger = new ConsoleLogger();
    logger.info('Hello World!');
};

(async () => {
    const result = await getHello();
})();
