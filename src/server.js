import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";

async function listener(request, response) {}

function listener(request, response) {
  //funcção
}

http.createServer(listener).listen(3333);
