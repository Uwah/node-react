import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import axios from '@/api/request'
import '@/css/login.scss'
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post('/api/daq.user.web.login', {
      loginParam: { 
        loginType: '1',
        verCode: '123456',
        account: '18924029790',
        hospitalId: '3190011045062273002' 
      } 
    }).then(res => res.getData())

    console.log(result)
  }

  nameChange(e) {
    this.setState({username: e.target.value})
  }
  pwdChange(e) {
    this.setState({password: e.target.value})
  }

  render() {
    return(
      <div className="login-content">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
          <Input prefix={<Icon type="user" style={{ fontSize: 18, color: 'rgba(0,0,0,.25)' }} />} onChange={this.nameChange.bind(this)}  placeholder="请输入账号" />
          </FormItem>
          <FormItem>
          <Input prefix={<Icon type="lock" style={{ fontSize: 18, color: 'rgba(0,0,0,.25)' }} />} onChange={this.pwdChange.bind(this)} type="password" placeholder="请输入密码" />
          </FormItem>
          <FormItem>
            <Checkbox>记住账号密码</Checkbox>
            <a className="login-form-forgot" href="">忘记密码？</a>
            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
          </FormItem>
        </Form>
      </div>
    )
  }

}