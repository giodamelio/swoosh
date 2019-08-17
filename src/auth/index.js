const serverlessHttp = require('serverless-http');
const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

module.exports.handler = serverlessHttp(app);
