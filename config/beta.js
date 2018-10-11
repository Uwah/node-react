/*
 * 测试环境配置
 * */

var config = {
  debug:true,  // debug 为 true 时，用于本地调试
  hostname_test:"xxxxx",  //接口测试地址
  port_test:'80',
  path:'/router',
  imgDomain:'xxxx',

  host:'localhost',
  port:8181, //端口
  pageSize:10,

  appKey:'xxxxxx',  //授权AppKey
  secret:'xxx', //密匙
  v:"1.0.0",
  format:"json",

  //文章父级目录,用来查询所有文章
  articleParentCategory:'xxxx',
  sessionSecret:"xxxx",
  weixin_appId:"xxxx",
  weixin_secret:"xxxx",

  //=========测试环境
  // //用于访问静态文件
  hostname_node:'172.16.61.219',
  port_node:'3000',
  //文件服务器
  req_domain_name:'xxxx',
  server_file_path:'xxx',
  server_img_path:'xxxxx',

  AuthorityPageSize:10,


  options:{
    host: 'xxxx',
    pass: 'xx',
    auth:'xxxx',
    port: "6370",
    db:31,
    ttl: 60 * 60 * 24 * 1   //Session的有效期为1天
  },
}

module.exports = config
