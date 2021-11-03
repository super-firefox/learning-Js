const os = require('os');

console.log(`
    platform = ${os.platform()}
    arch = ${os.arch()}
    cpus = ${os.cpus()[0].model}
    totalmem = ${Math.round(os.totalmem() / 1024 / 1024 / 1024)} GB
    freemem = ${Math.round(os.freemem() / 1024 / 1024 / 1024)} GB
    homedir = ${os.homedir()}
    uptime = ${Math.round(os.uptime()/ 60 / 60)} hour
    os.EOL
`)