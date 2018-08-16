/*
 * 生产环境配置
 * */

var config = {

  debug:true,  // debug 为 true 时，用于本地调试
  // hostname_test:"120.76.100.177",  //(正式环境)
  hostname_test:"api.douanquan.com",  //(正式环境)
  //hostname_test:"api.douanquan.com",  //(正式环境)
  // hostname_test:"120.76.24.129",  //(线上测试)
  // hostname_test:"172.16.61.219",  //(内网测试)
  //hostname_test:"192.168.6.73",
  // port_test:'8080',
  // port_test:'8082',
  port_test:'80',
  path:'/router',
  imgDomain:'http://jhd-daq-img.oss-cn-shanghai.aliyuncs.com/',

  host:'localhost',
  port:8181, //端口
  pageSize:10,

  // appKey:'T-OPF-02191317',  //授权AppKey
  // secret:'themis-opf-test', //密匙

  appKey:'OPF-JHD-DAQ-Web',  //授权AppKey
  secret:'DAQ-Web', //密匙
  v:"1.0.0",
  format:"json",

  //文章父级目录,用来查询所有文章
  articleParentCategory:'2140011038422147048',
  sessionSecret:"DAQ-Manager-Session",
  weixin_appId:"wx97b7990f2fe47aa7",
  weixin_secret:"d4624c36b6795d1d99dcf0547af5443d",


  //=========正式环境
  //用于访问静态文件
  hostname_node:'120.76.100.234',
  port_node:'3000',
  //文件服务器
  req_domain_name:'http://manager.douanquan.com',
  server_file_path:'http://file.douanquan.com/',
  server_img_path:'http://image.douanquan.com/',

  AuthorityPageSize:10,

  options:{
    host:"r-bp11362f1f0fbcf4.redis.rds.aliyuncs.com",
    // "host":"127.0.0.1",
    pass:'TsahdgSAFDS3445',
    port: "6379",
    db:33,
    ttl: 60 * 60 * 24 * 1   //Session的有效期为1天
  }

  // options:{
  //     // host:"1ac256e68d824785.m.cnsza.kvstore.aliyuncs.com",
  //     "host":"127.0.0.1",
  //     // "pass":'1ac256e68d824785:JihuiduoRedis88',
  //     "port": "6379",
  //     "ttl": 60 * 60 * 24 * 1   //Session的有效期为1天
  // }

}

module.exports = config
