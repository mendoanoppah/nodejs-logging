import wn from "winston";

async function callAsync() {
  return Promise.reject("upssie");
}

const logger = wn.createLogger({
  // handleExceptions: true,
  // handleRejections: true,
  transports: [
    new wn.transports.Console({}),
    new wn.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "unhandleRejection-promise.json"
    }),
  ]
});

callAsync();