const path = require('path');
module.exports  = {
  appenders: {
    app: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/app.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
    http: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/http.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
    router: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/router.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
    service: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/service.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
    request: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/request.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
    proxy: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/proxy.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
    middleware: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/middleware.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
    error: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/error.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
    
  },
  levels: {
    "router": "INFO",
    "request": "INFO",
    "middleware": "INFO",
    "proxy": "INFO",
    "service": "INFO",
    "error": "ERROR"
  }
  
};

