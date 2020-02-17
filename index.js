const express = require("express");

// STEP 1 -  BRING IN ROUTER
const postRouter = require("./router/post-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
 res.send(`
    <h2>Post API</h>
  `);
});

// STEP 2, USE THE ROUTER
server.use("/api/posts", postRouter);

server.listen(5000, () => {
 console.log(`*** Server Running on http://localhost:5000 ***`);
});
