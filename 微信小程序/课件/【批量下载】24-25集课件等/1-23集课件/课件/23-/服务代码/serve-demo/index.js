const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const appRouter = new Router();

const app = new Koa();

appRouter.post('/hello', (ctx, next) => {
  let bd = ctx.request.body;
  ctx.body = {
    code: 0,
    msg: `你好 ${bd.name}, 请求成功`
  }
});

app
  .use(koaBody())
  .use(appRouter.routes())

app.listen(3000,()=>{
  console.log('server is listening on port 3000');
});
