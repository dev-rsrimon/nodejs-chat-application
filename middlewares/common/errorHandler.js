const createError = require("http-errors");

// 404 not fond hanler
function notFondHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

// default error handler
function errorHandler (err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err };

  res.status(err.status || 500);

  if (res.locals.html) {
    //   html response
    res.render("error", {
      title: "Error page",
    });
  } else {
    res.json(res.locals.error);
  }
}

module.exports = {
  notFondHandler,
  errorHandler,
};
