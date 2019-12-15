import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Index from './Pages/Index'
import Workplace from './Pages/Workplace'
import Video from './Pages/Video'
import './index.css'
import "antd/dist/antd.css";
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

function AppRouter() {
   let routeConfig = [
      {path: '/', title: '博客首页', exact: true, component: Index},
      {path: '/video/', title: '视频教程', exact: false, component: Video},
      {path:'/workplace/',title:'职场技能',exact:false,component:Workplace}
   ]
   return (
      <Router>
         <Layout>
            <Header className="header">
               <div className="logo" />
               <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{lineHeight: '64px'}}
               >

                  {/* <Menu.Item key="1"><Link to="/">博客首页</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/video/">视频教程</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="">职场技能</Link></Menu.Item> */}
                  {
                     routeConfig.map((item, index) => {
                        return (<Menu.Item key={index}><Link to={item.path}>{item.title}</Link></Menu.Item>)
                     })
                  }
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
                     {
                     routeConfig.map((item, index) => {
                        return (<Menu.Item key={index}><Link to={item.path}>{item.title}</Link></Menu.Item>)
                     })
                  }

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
                     {/* 定义路由 */}
                     {/* <Route path="/" exact component={Index} />
                           <Route path="/list"  component={Lists} />
                           <Route path="/video/"   component={Video} /> */}
                           {/* 动态显示路由 */}
                     {
                        routeConfig.map((item, index) => {
                           return (<Route key={index} exact={item.exact} path={item.path} component={item.component} />)
                        })
                     }

                  </Content>
               </Layout>
            </Layout>
         </Layout>

      </Router>
   );
}

export default AppRouter;