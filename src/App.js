import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Layout, Menu} from 'antd';

import {Link} from "react-router-dom";
import {Routes} from "./Components/routes/routes";


const {Header, Content, Sider} = Layout;

//todo версия веб шторма 2020.2
// https://ant.design/components/overview/
const App = () => {

    const navList = [
        {
            icon: <Link to="/lesson1">Lesson1</Link>,
        },
        {
            icon: <Link to="/lesson2">Lesson2</Link>,
        },
        {
            icon: <Link to="/repeat">repeat</Link>,
        },
        {
            icon: <Link to="/profile">profile</Link>,
        },
        {
            icon: <Link to="/custom">custom</Link>,
        },
        {
            icon: <Link to="/nodejs">nodejs</Link>,
        },
    ]
    return (
    <Layout>
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={navList} />
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Routes/>
            </Layout>
        </Content>
    </Layout>
    );
};
//todo сделайте https://codesandbox.io/s/webni0?file=/demo.js https://ant.design/components/form/#header

export default App;