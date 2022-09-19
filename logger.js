// const logger = createLogger({
//   level: 'info',
//   transports: [
//     new transports.console({
//       level: 'debug',
//       colorize: true,
//       template: createTemplate(
//         format.level(),
//         format.text(' :gift:'),
//         format.newLine(),
//         format.message(),
//         format.newLine(),
//         format.text('Logged from '),
//         format.location(),
//         format.text(' :tada:'),
//       ),
//     }),
//     new transports.file({
//       level: 'info',
//       path: path.join(__dirname, '../important.log'),
//       template: createTemplate(
//         format.level(),
//         format.text(' :gift:'),
//         format.newLine(),
//         format.message(),
//         format.newLine(),
//         format.text('Logged from '),
//         format.location(),
//         format.text(' :tada:'),
//       ),
//     }),
//     new transports.file({
//       level: 'info',
//       path: path.join(__dirname, '../not-so-important.log'),
//       template: createTemplate(
//         format.level(),
//         format.text(' :tada:'),
//         format.newLine(),
//         format.message(),
//         format.newLine(),
//         format.text('Logged from '),
//         format.location(),
//         format.text(' :tada:'),
//       ),
//     }),
//   ],
// });

const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}
