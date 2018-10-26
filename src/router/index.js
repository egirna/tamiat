import Vue from 'vue'
import Router from 'vue-router'

<<<<<<< HEAD
// import app pages 
import Home from '../components/Home';
import Admin from '../components/Admin';
import Login from '../components/Admin/Login';
import Homepage from '../components/Website/Homepage'
=======
import routes from './routes'
import dynamicRoutes from './dynamic-routes'
>>>>>>> 9f59576068808695280049ce77513510c921f31d

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes
})

<<<<<<< HEAD
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'posts',
          component: Posts,
          children: [
            {
              path: 'new',
              component: PostNew
            },
            {
              path: 'edit/:key',
              component: PostEdit
            }
          ]
        },
        {
          path: 'settings',
          component: Settings
        },
        {
          path: 'pages',
          component: Pages
        },
        {
          path: 'media',
          component: Media
        }
      ]
    },
    {
      path: '*',
      name: 'default',
      component: Home
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: Homepage
    }
  ]
});
=======
dynamicRoutes.addDynamicRoutesTo(router)

export default router
>>>>>>> 9f59576068808695280049ce77513510c921f31d
