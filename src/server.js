import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routehandler.js";

async function listener(request, response) {
  await jsonHandler(request, response);
  routeHandler(request, response);
}

function listener(request, response) {
  //funcção
}

http.createServer(listener).listen(3333);
