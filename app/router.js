'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // router.get('/api/get',app.jwt, controller.home.get);
  router.get('/api/get', controller.home.get);
  router.get('/api/gets', controller.home.gets);
  router.get('/api/getd', controller.home.getd);
  // router.post('/api/add', controller.home.add);
};
