const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
    level:'error',
    format: combine(
        label({ label: 'message' }),
        timestamp(),
        prettyPrint()
      ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'combined.log' })
    ]
  });





module.exports.logger = logger