'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx,app} = this;
    const token = app.jwt.sign({uesr:'zb',password:'123'}, app.config.jwt.secret);
    ctx.body = {
      code:1,
      token
    }
  }
  async get() {
    const { ctx } = this;
    // let {name}=ctx.request.query;
    // const crypto = require('crypto');
    // const hmac = crypto.createHmac('sha256', name);
    // hmac.update('要创建哈希的数据');
    // let pass=hmac.digest('hex')
    // console.log(name);
    let data= await ctx.service.home.get();
    ctx.body ={
      code:1,
      data
      // pass
    }
  }
  async gets() {
    const { ctx } = this;
    let data= await ctx.service.home.gets();
    ctx.body ={
      code:1,
      data
      
    }
  }
  async getd() {
    const { ctx } = this;
    let data= await ctx.service.home.getd();
    ctx.body ={
      code:1,
      data
      
    }
  }
}

module.exports = HomeController;
