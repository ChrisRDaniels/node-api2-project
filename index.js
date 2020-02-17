const express = require("express");

// STEP 1 - BRING IN THE EXPRESS ROUTER
const postRouter = require("./router/post-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
 res.send(`
    <h2>Post API</h>
  `);
});

// STEP 2 - USE THE EXPRESS ROUTER
server.use("/api/posts", postRouter);

const port = 5000;

server.listen(port, () => {
 console.log(`*** Server Running on http://localhost:${port} ***`);
});
