// const roles = {
//     admin: ["add-user", "read-users", "update-user", "delete-user"],
//     user: ["add-goal", "read-goals", "update-goal", "delete-goal"],
// }

const permissions = {
    admin: {
        GET: [],
        POST: [],
        PUT: [],
        DELETE: []
    },
    user: {
        GET: [],
        POST: [],
        PUT: [],
        DELETE: [],
    },
}

module.exports = permissions; // export the roles object