import wn from "winston";
import TransportStream from "winston-transport";

test('create new logger with new transports', () => {

  class MyTransport extends TransportStream {
    
    constructor(option) {
      super(option);
    }

    log(info, next) {
      console.log(`${new Date} : ${info.level.toUpperCase()} : ${info.message}`);
      next();
    }

  }
  
  const logger = wn.createLogger({
    level: "silly"
,    transports: [
      new MyTransport({}),
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
