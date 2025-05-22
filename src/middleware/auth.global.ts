/**
 * 目前全局路由中间件可用
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated()是否登录
  if (import.meta.client && to.path !== '/' && !isAuthenticated()) {
    return navigateTo('/');
  }
});
