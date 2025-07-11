import wn from "winston";

const logger = wn.createLogger({
  level: "info",
  // handleExceptions: true, // global Exception
    transports: [
      new wn.transports.Console({}),
      new wn.transports.File({
        handleExceptions: true,
        filename: "exception.log"
      }),
    ]
});
  
hello();