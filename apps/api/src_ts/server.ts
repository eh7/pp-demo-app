//const Router = require("./services/router");
import { Router } from "./services/router";

async function initServerApi () {
  const router = new Router();
  router.listen();
}

initServerApi();

