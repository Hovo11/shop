import Vue from 'vue'
import Router from 'vue-router'
import authRoutes from '../components/Auth/auth-routes.js'
//not found
import NotFound from "../components/404/NotFound";
import auth from "../middlewares/auth";
import guest from "../middlewares/guest";
import announcments from "../components/Auth/announcments/announcment-routes";




Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'

    },
    ...announcments,
    ...authRoutes,
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
router.beforeEach((to, from, next) => {
if(to.meta.middleware){
  if (to.meta.middleware.includes('auth')){
    auth({next,router})
  }
  if (to.meta.middleware.includes('guest')){
    guest({from,next,router})
  }

}
});
export default router;
