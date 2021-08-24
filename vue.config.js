module.exports = {
  // publicPath: '/dist/',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/WorkShop-vuecli-practice/'
    : '/',
};
