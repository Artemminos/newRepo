import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Layout, Menu, Breadcrumb, Slider} from 'antd';

import {Route, Link} from "react-router-dom";
import Parasha, {About} from "./Page/About";
import {Routes} from "./Components/routes/routes";
import {Lesson1} from "./Components/Lessons/Lesson1";
import {Lesson2} from "./Components/Lessons/Lesson2";

const {Header, Content, Sider} = Layout;

//todo версия веб шторма 2020.2

const App = () => {

    const navList = [
        {
            icon: <Link to="/lesson1">Lesson1</Link>,
        },
        {
            icon: <Link to="/lesson2">Lesson2</Link>,
        },
        {
            icon: <Link to="/market">market</Link>,
        },
        {
            icon: <Link to="/profile">profile</Link>,
        },
        {
            icon: <Link to="/custom">custom</Link>,
        },
    ]
    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
            </Header>
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={navList}/>
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Routes/>

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
//todo сделайте https://codesandbox.io/s/webni0?file=/demo.js https://ant.design/components/form/#header

export default App;