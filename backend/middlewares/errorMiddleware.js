const errorMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(statusCode);
  res.status(statusCode).json({ message: "Improper structure"})
  next();
};

module.exports = {
  errorMiddleware,
};
