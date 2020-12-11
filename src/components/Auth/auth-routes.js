//Auth routes
import Register from "./Register";
import Login from "./Login";
import HelloUser from "./HelloUser";

export default [
  {
    path: '/signup',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/hello',
    name: 'Hello',
    component: HelloUser
  },
]
