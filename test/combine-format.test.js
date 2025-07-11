import wn, { format } from "winston";

test('logging with combine format', () => {

  const logger = wn.createLogger({
    level: "info",
    format: wn.format.combine(
      wn.format.timestamp(),
      wn.format.ms(),
      wn.format.json() 
    ),
    transports: [
      new wn.transports.Console({})
    ]
  });

  logger.info('hello format');
  logger.warn('hello format');
  logger.error('hello format');
});