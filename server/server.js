const Koa = require("koa");
const koaBody = require("koa-body");
const router = require("./router");
const cors = require("@koa/cors");

const app = new Koa();

app.use(cors());
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

app.listen(5000, () => {
  console.log("We are live!");
});
