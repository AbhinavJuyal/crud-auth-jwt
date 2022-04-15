// const roles = {
//     admin: ["add-user", "read-users", "update-user", "delete-user"],
//     user: ["add-goal", "read-goals", "update-goal", "delete-goal"],
// }

const permissions = {
  admin: {
    GET: ["/api/users", "/api/users/:id", "/api/verify/email/:id"],
    POST: ["/api/users"],
    PUT: ["/api/users/:id"],
    DELETE: ["/api/users/:id"],
  },
  user: {
    GET: ["/api/goals", "/api/users/:id", "/api/verify/email/:id, "],
    POST: ["/api/goals", "/api/user/login", "/api/user/register"],
    PUT: ["/api/goals/:id", "/api/users/:id"],
    DELETE: ["/api/goals/:id"],
  },
};

module.exports = permissions; // export the roles object
