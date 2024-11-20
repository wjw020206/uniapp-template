import { RouterMount, createRouter } from 'uni-simple-router';

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [...ROUTES]
});

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  next();
});

export { router, RouterMount };
