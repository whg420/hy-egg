const Service = require('egg').Service;

class UserService extends Service {
    async index() {
    // return await this.ctx.query('select * from bannerlist');
      }
  async get() {
    // return await this.app.mysql.query('select * from userlist where name=?',[name]);
      return await this.app.mysql.query('select * from users');
  }
  async gets() {
    // return await this.app.mysql.query('select * from userlist where name=?',[name]);
      return await this.app.mysql.query('select * from sidebar');
  }
  async getd() {
    // return await this.app.mysql.query('select * from userlist where name=?',[name]);
      return await this.app.mysql.query('select * from userlist');
  }
}

module.exports = UserService;
