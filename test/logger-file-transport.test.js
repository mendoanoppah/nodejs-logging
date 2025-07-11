import wn from "winston";

test('create new logger w Console & file transport', () => {
  
  const logger = wn.createLogger({
    level: "info",
    transports: [
      new wn.transports.Console({}),
      new wn.transports.File({
        filename: "application.log"
      }),
      new wn.transports.File({
        filename: "ioo.log"
      }),
    ]
  });

  logger.info('hello world');
  logger.info('hello world');
  logger.info('hello world');
  logger.info('hello world');

});