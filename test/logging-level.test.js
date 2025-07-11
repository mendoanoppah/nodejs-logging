import wn from "winston";

test('create new logger w Console transport', () => {

  const logger = wn.createLogger({
    level: "warn",
    transports: [
      new wn.transports.Console({})
    ]
  });

  logger.log({ level: "error", message: "hello error" });
  logger.log({ level: "warn", message: "hello warn" });
  logger.log({ level: "info", message: "hello info" });
  logger.log({ level: "http", message: "hello http" });
  logger.log({ level: "verbose", message: "hello verbose" });
  logger.log({ level: "debug", message: "hello debug" });
  logger.log({ level: "silly", message: "hello silly" });

});

test('logging w shortcut function', () => {

  const logger = wn.createLogger({
    level: "debug",
    transports: [
      new wn.transports.Console({})
    ]
  });

  logger.error('hello error');
  logger.warn('hello warn');
  logger.info('hello info');
  logger.http('hello http');
  logger.verbose('hello verbose');
  logger.debug('hello debug');
  logger.silly('hello silly');

});