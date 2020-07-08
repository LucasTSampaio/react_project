const { default: Home } = require("./pages/home/Home");
const { default: User } = require("./pages/user/User");


const routesConfig = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/user",
        component: User,
        exact: true
    }
]

export default routesConfig