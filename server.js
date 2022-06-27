const express = require("express");
const dd = require("dotenv");
const app = express();
const path = require("path");
const compression = require("compression");
dd.config();

const PORT = process.env.PORT || 5001;
const DIR = "build";
const prod = environments.indexOf(process.env.NODE_ENV);
app.use(compression());
app.use(express.static(DIR));
app.use(function (environments, status) {
  environments = environments || ["production"];
  status = status || 302;
  return function (req, res, next) {
    if (prod >= 0 || process.env.NODE_ENV !== "local") {
      if (req.headers["x-forwarded-proto"] !== "https") {
        res.redirect(status, "https://" + req.hostname + req.originalUrl);
      } else {
        next();
      }
    } else {
      next();
    }
  };
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, DIR, "/index.html"));
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
