node-http-proxy-delay
=====================

Small library to proxy HTTP requests after a certain amount of delay.

When a request is received, the library will immediately return a 200 response,
and after some time the actual proxied request will be made to the backend.

Usage
-----

```bash
npm install
PROXY_TARGET=http://localhost:8080 PROXY_DELAY=1000 PROXY_PORT=7000 node index.js
```

License
-------

MIT
