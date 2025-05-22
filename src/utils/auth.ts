export const isAuthenticated = () => {
  return useCookie('isLogin').value;
};
