
const Logger = require('./Logger')  // invoca al modulo que contiene la clase

//cración de un objeto
const dbLogger = new Logger('DB')  // Creas un objeto nuevo, esto llama al constructor de la clse

// invocación del mmétodo
dbLogger.info('This is an information message')

// creación de otro objeto
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')


