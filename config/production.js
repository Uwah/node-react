/*
 * 生产环境配置
 * */

var config = {

  debug:true,  // debug 为 true 时，用于本地调试
  hostname_test:"xxxxx",  //(正式环境)
  port_test:'80',
  path:'/router',
  imgDomain:'xxxxx',

  host:'localhost',
  port:8181, //端口
  pageSize:10,


  appKey:'xxxx',  //授权AppKey
  secret:'xxxx', //密匙
  v:"1.0.0",
  format:"json",

  //文章父级目录,用来查询所有文章
  articleParentCategory:'xxx',
  sessionSecret:"xxxx",
  weixin_appId:"xxx",
  weixin_secret:"xxxx",


  //=========正式环境
  //用于访问静态文件
  hostname_node:'xxxx',
  port_node:'3001',
  //文件服务器
  req_domain_name:'xxxx',
  server_file_path:'xxxx',
  server_img_path:'xxxx',

  AuthorityPageSize:10,

  options:{
    host:"xxx",
    pass:'xxx',
    port: "6379",
    db:33,
    ttl: 60 * 60 * 24 * 1   //Session的有效期为1天
  }


}

module.exports = config
