import { generate } from './generate';

const server = Bun.serve({
  port: 8080,
  fetch(request) {
    return new Response(generate());
  }
});

console.log(`Listening at http://localhost:${server.port}`)