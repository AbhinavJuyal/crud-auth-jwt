const asyncHandler = require("express-async-handler");
const permissions = require("../utils/permissions");

const authRole = asyncHandler(async (req, res, next) => {
  const authUser = res.locals.user;
  const permittedEndPoints = permissions[authUser.role][req.method];
  if (!permittedEndPoints) throw new Error("End Point does not exist");
  let query = req.originalUrl;
  query = query.split("/");
  query[query.length - 1] === "" && query.pop();
  if (req.params.id) {
    query.pop();
    query.push(":id");
  }
  query = query.join("/");
  console.log("query", query);
  const isPermitted = permittedEndPoints.includes(query);
  if (!isPermitted)
    throw new Error("You are not permitted to access this endpoint");
  next();
});

module.exports = { authRole };
