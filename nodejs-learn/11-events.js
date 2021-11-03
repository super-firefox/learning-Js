const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('start', (msg, smile) => console.log('Start', msg, smile));

emitter.emit('start', 'message', ':-)');