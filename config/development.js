/*
 * 开发(本地)环境配置
 * */

var config = {
  debug: true, // debug 为 true 时，用于本地调试
  hostname_test: 'xxx',
  port_test: '80',
  path: '/router',
  imgDomain: 'http://jhd-daq-img.oss-cn-shanghai.aliyuncs.com/',

  host: 'localhost',
  port: 8181, // 端口
  pageSize: 10,


  appKey: 'xxxx', // 授权AppKey
  secret: 'xxx', // 密匙 
  v: '1.0.0',
  format: 'json',

  // 文章父级目录,用来查询所有文章
  articleParentCategory: 'xxxx',
  sessionSecret: 'xxxxxxx',
  weixin_appId: 'xxxxx',
  weixin_secret: 'xxxx',

  // 新闻父级目录，用来查询所有文章
  newsParentCategory: 'xxxx',

  // =========测试环境
  // //用于访问静态文件
  hostname_node: 'xxxxx',
  port_node: '3000',
  // 文件服务器
  req_domain_name: 'xxxx',
  server_file_path: 'xxx',
  server_img_path: 'xxxxx',

  AuthorityPageSize: 10,

  options: {
    'host': '127.0.0.1',
    'pass': '111',
    'port': '6379',
    'ttl': 60 * 60 * 24 * 1 // Session的有效期为1天
  }

}

module.exports = config
