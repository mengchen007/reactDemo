import React, {Component, Fragment} from 'react'
import Button from 'antd/es/button';
import "antd/dist/antd.css";
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import axios from 'axios'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class Xiaojiejie extends Component {
   //js的构造函数，由于其他任何函数执行
   constructor(props) {
      super(props) //调用父类的构造函数，固定写法
      this.state = {
         inputValue: '', // input中的值
         list: ['基础按摩', '精油推背']    //服务列表
      }
   }
   // componentWillMount() {
   //    console.log('componentWillMount----组件将要挂载到页面的时刻')
   // }
   componentDidMount() {
      console.log('componentDidMount----组件挂载完成的时刻执行')
      axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
         .then((res) => {console.log('axios 获取数据成功:' + JSON.stringify(res))})
         .catch((error) => {console.log('axios 获取数据失败' + error)})
   }
   // shouldComponentUpdate() {
   //    console.log('shouldComponentUpdate---组件发生改变前执行')
   //    return true
   //    // 它要求返回一个布尔类型的结果，必须有返回值，这里就直接返回一个true了（真实开发中，这个是有大作用的）
   // }
   // //shouldComponentUpdate返回true才会被执行。
   // componentWillUpdate() {
   //    console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
   // }
   // componentDidUpdate() {
   //    console.log('componentDidUpdate----组件更新之后执行')
   // }

   render() {
      return (
         <Layout>
            <Header className="header">
               <div className="logo" />
               <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{lineHeight: '64px'}}
               >
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
               </Menu>
            </Header>
            <Layout>
               <Sider width={200} style={{background: '#fff'}}>
                  <Menu
                     mode="inline"
                     defaultSelectedKeys={['1']}
                     defaultOpenKeys={['sub1']}
                     style={{height: '100%', borderRight: 0}}
                  >
                     <SubMenu
                        key="sub1"
                        title={
                           <span>
                              <Icon type="user" />
                              subnav 1
              </span>
                        }
                     >
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                     </SubMenu>
                     <SubMenu
                        key="sub2"
                        title={
                           <span>
                              <Icon type="laptop" />
                              subnav 2
              </span>
                        }
                     >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                     </SubMenu>
                     <SubMenu
                        key="sub3"
                        title={
                           <span>
                              <Icon type="notification" />
                              subnav 3
              </span>
                        }
                     >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                     </SubMenu>
                  </Menu>
               </Sider>
               <Layout style={{padding: '0 24px 24px'}}>
                  <Breadcrumb style={{margin: '16px 0'}}>
                     <Breadcrumb.Item>Home</Breadcrumb.Item>
                     <Breadcrumb.Item>List</Breadcrumb.Item>
                     <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
                  <Content
                     style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                     }}
                  >
                     <Fragment>
                        {/* 正确注释的写法 */}
                        <div>
                           <label htmlFor="jspang">加入服务：</label>
                           <input id="jspang" className="input" value={this.state.inputValue}
                              onChange={this.inputChange.bind(this)} />
                           <Button type="primary" onClick={this.addList.bind(this)}> 增加服务 </Button>
                        </div>

                        {/* 子组件调用父组件方法
如果子组件要调用父组件方法，其实和传递数据差不多，只要在组件调用时，
把方法传递给子组件就可以了,记得这里也要进行this的绑定，如果不绑定子组件是没办法找到这个父组件的方法的。 */}

                        <ul ref={(ul) => {this.ul = ul}}>
                           <TransitionGroup>
                              {
                                 this.state.list.map((item, index) => {
                                    return (
                                       <CSSTransition
                                          timeout={1000}
                                          classNames='boss-text'
                                          unmountOnExit
                                          appear={true}
                                          key={index + item}
                                       >
                                          <XiaojiejieItem
                                             content={item}
                                             index={index}
                                             deleteItem={this.deleteItem.bind(this)}
                                          />
                                       </CSSTransition>
                                    )
                                 })
                              }
                           </TransitionGroup>
                        </ul>
                        <Boss />
                     </Fragment>
                  </Content>
               </Layout>
            </Layout>
         </Layout>
      )
   }

   inputChange(e) {
      // console.log(e.target.value);
      // this.state.inputValue=e.target.value;
      this.setState({
         inputValue: e.target.value
      })
   }

   //增加服务的按钮响应方法
   addList() {
      this.setState({
         list: [...this.state.list, this.state.inputValue],
         inputValue: ''
      }, () => {
         // React中更多setState是一个异步函数所造成的。也就是这个setState，代码执行是有一个时间的，
         // 如果你真的想了解清楚，你需要对什么是虚拟DOM有一个了解。简单的说，就是因为是异步，还没等虚拟Dom渲染，我们的console.log就已经执行了。

         // 那这个代码怎么编写才会完全正常那，其实setState方法提供了一个回调函数，也就是它的第二个函数。下面这样写就可以实现我们想要的方法了。
         console.log(this.ul.querySelectorAll('div').length)
      }
      )

      // console.log(this.ul.querySelectorAll('div').length)  长度会少一位
   }

   //删除单项服务
   deleteItem(index) {
      let list = this.state.list
      list.splice(index, 1)
      this.setState({
         list: list
      })

   }

}

export default Xiaojiejie
