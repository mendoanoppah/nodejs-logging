import wn from "winston";

test('logging with printf format', () => {
  
  const logger = wn.createLogger({
    level: "info",
    // format: wn.format.json(),
    // format: wn.format.simple(),
    // format: wn.format.logstash(),
    format: wn.format.printf(log => {
      return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`
    }),
    transports: [
      new wn.transports.Console({})
    ]
  });

  logger.info('hello format');
  logger.warn('hello format');
  logger.error('hello format');
});

test('logging with format ', () => {

  const logger = wn.createLogger({
    level: "info",
    // format: wn.format.json(),
    // format: wn.format.simple(),
    format: wn.format.logstash(),
    transports: [
      new wn.transports.Console({})
    ]
  });

  logger.info('hello format');
});