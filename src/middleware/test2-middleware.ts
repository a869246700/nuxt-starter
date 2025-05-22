/**
 * 目前页面路由中间件不可用
 */
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('============== test2-middleware ==============');
})