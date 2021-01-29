const express = require("express");

const app = express();
app.get("/accept-shop-param", (req, res) => {
  console.log(req.query);
  res.status(200).json(req.query);
});

app.get("/oauth2/shopify/callback", (req, res) => {
  console.log(req.query);
  res.status(200).json(req.query);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
