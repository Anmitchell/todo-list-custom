import express from "express";

const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

export default app;
