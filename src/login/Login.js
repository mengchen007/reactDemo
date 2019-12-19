import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import "antd/dist/antd.css";
import './Login.css'
import {HashRouter as Router, Route, Link} from "react-router-dom";
// import Img from "../../public/login-bg.jpg"
class NormalLoginForm extends React.Component {
   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
         if (!err) {
            console.log('Received values of form: ', values);
         }
      });
   };

   render() {
      const {getFieldDecorator} = this.props.form;
      return (
         <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
               {getFieldDecorator('username', {
                  rules: [{required: true, message: 'Please input your username!'}],
               })(
                  <Input
                     prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                     placeholder="Username"
                  />,
               )}
            </Form.Item>
            <Form.Item>
               {getFieldDecorator('password', {
                  rules: [{required: true, message: 'Please input your Password!'}],
               })(
                  <Input
                     prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                     type="password"
                     placeholder="Password"
                  />,
               )}
            </Form.Item>
            <Form.Item>
               {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
               })(<Checkbox>Remember me</Checkbox>)}
               <a className="login-form-forgot" href="">
                  Forgot password
           </a>
               <div>
               <Link to='/video'> <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
           </Button>
           </Link>
               </div>

               Or <a href="">register now!</a>
            </Form.Item>
         </Form>
      );
   }
}
class login extends Component {

   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      const WrappedRegistrationForm = Form.create()(NormalLoginForm);
      return (
         <div className='login'>
            <div><Link to='/video'><Button>登录231</Button></Link> </div>
            <div className='login-form-div' style={{backgroundColor: '#fff'}}>
               <h2>欢迎登录</h2>
               <WrappedRegistrationForm></WrappedRegistrationForm>
            </div>
         </div>
      );
   }
}
// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('container'));


export default login;