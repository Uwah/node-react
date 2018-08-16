/*
 * 开发(本地)环境配置
 * */

var config = {
  debug: true, // debug 为 true 时，用于本地调试
  // hostname_test:"120.76.24.129",  //(线上测试)
  hostname_test: 'beta.api.douanquan.com', // (线上测试)
  //  hostname_test:"172.16.72.251",  //(alpah 地址)
  // hostname_test:"172.16.61.219",  //(内网测试)
  // hostname_test:"192.168.6.73",
  // port_test:'8080',
  port_test: '80',
  // port_test: '8317',
  path: '/router',
  imgDomain: 'http://jhd-daq-img.oss-cn-shanghai.aliyuncs.com/',

  host: 'localhost',
  port: 8181, // 端口
  pageSize: 10,

  // appKey:'T-OPF-02191317',  //授权AppKey
  // secret:'themis-opf-test', //密匙

  appKey: 'OPF-JHD-DAQ-Web', // 授权AppKey
  secret: 'DAQ-Web', // 密匙 
  v: '1.0.0',
  format: 'json',

  // 文章父级目录,用来查询所有文章
  articleParentCategory: '2140011038422147048',
  sessionSecret: 'DAQ-Manager-Session',
  weixin_appId: 'wx974d23f2588c4648',
  weixin_secret: '471641f51265b736d80ac7bd0275d6c7',

  // 新闻父级目录，用来查询所有文章
  newsParentCategory: '2140012222391112018',

  // =========测试环境
  // //用于访问静态文件
  hostname_node: '172.16.61.219',
  port_node: '3000',
  // 文件服务器
  req_domain_name: 'http://beta.manager.douanquan.com',
  server_file_path: 'http://beta.file.douanquan.com/',
  server_img_path: 'http://beta.image.douanquan.com/',

  AuthorityPageSize: 10,

  options: {
    // host:"1ac256e68d824785.m.cnsza.kvstore.aliyuncs.com",
    'host': '127.0.0.1',
    'pass': '111',
    // "pass":'1ac256e68d824785:JihuiduoRedis88',
    'port': '6379',
    'ttl': 60 * 60 * 24 * 1 // Session的有效期为1天
  }

// options:{
//     host:"1ac256e68d824785.m.cnsza.kvstore.aliyuncs.com",
//     // "host":"127.0.0.1",
//     pass:'1ac256e68d824785:JiHuiDuoRedis123321',
//     auth:'1ac256e68d824785:JiHuiDuoRedis123321',
//     port: "6379",
//     db:55,
//     ttl: 60 * 60 * 24 * 1   //Session的有效期为1天
// },
}

module.exports = config
