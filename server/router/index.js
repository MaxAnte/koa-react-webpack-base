const Router = require("koa-router");
const router = new Router();

router.get("/", async (ctx) => {
  try {
    ctx.body = {
      message: "hello",
    };
  } catch (error) {
    ctx.status = 404;
    ctx.body = error;
  }
});

router.get("/test", async (ctx) => {
  try {
    ctx.body = {
      title: "Hello",
    };
  } catch (error) {
    ctx.status = 404;
    ctx.body = error;
  }
});

module.exports = router;
