import wn from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test('logging with daily rotate file', () => {

  const logger = wn.createLogger({
    level: "info",
    transports: [
      new wn.transports.Console({}),
      new DailyRotateFile({
        filename: "app-%DATE%.log",
        zippedArchive: true,
        maxSize: "100m",
        maxFiles: "14d"
      }),
    ]
  });

  for (let i = 0; i < 100000; i++) {
    logger.info(`hello world ${i}`);
  }

});