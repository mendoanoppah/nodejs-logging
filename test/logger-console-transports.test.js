import wn from "winston";

test('create new logger w Console transport', () => {
  
  const logger = wn.createLogger({
    transports: [
      new wn.transports.Console({})
    ]
  });

  logger.log({
    level: "error", //high - //1. error, 2. warn, 3. info, 4.http, 5.verbose, 6.debug, 7.silly - //low
    message: "hello logging"
  });
});
