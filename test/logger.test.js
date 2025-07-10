import wn from "winston";

test('create new logger', () => {

  const logger = wn.createLogger({});

  logger.log({
    level: 'info',
    message: 'hello logging'
  });
});