const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});
function funError() {
    throw new Error ("Ente es mi mensaje de error personalizado")
}
try{
    //Codigo que puede fallar
    funError()
}catch(e){
// en caso de fallar,quiero que se ejecute
logger.error(error.message) 
}
