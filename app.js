const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const LogHandle = require('./lib/LogHandle')
const goodsList = require('./routes/goodsList');
const reactSSR = require('./server/reactSsr')
const config = require('./config')
const api = require('./server/api/index')
const app = express();

if(!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //静态文件目录


app.locals.server_file_path = config.server_file_path
app.locals.server_img_path = config.server_img_path
app.locals.imgDomain = config.imgDomain

//配置开发环境 
if('development' === app.get('env')) {
  app.set('showStackError', true)
  app.use(logger(':method :url :status'))
  app.locals.pretty = true //格式化页面内容
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// 打印请求日志到文件
app.use(LogHandle.connectLogger('http'))
app.use(LogHandle.connectLogger('router'))


app.use('/dic', goodsList);
app.use('/api', api);
app.use('/', reactSSR);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
  