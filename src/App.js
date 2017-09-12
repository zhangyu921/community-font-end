import React, { Component } from 'react'
import { BackTop, Layout } from 'antd'
import Header from './view/header'
import BreadCrumb from './view/breadcrumb'
import Blog from './view/main/blog'
import axios from 'axios'
// import { Redirect, Route } from 'react-router-dom'
import { Redirect, Route } from 'mirrorx'

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
  ? 'http://zhangyu.website/api/v1'
  // : 'http://127.0.0.1:8082/api/v1'
  : 'http://zhangyu.website/api/v1'

const {Content, Footer} = Layout

class App extends Component {
  render () {
    return (
      <Layout style={{minHeight: document.body.clientHeight}}>
        <Header/>
        <Content style={{margin: '0 5%'}}>
          <BreadCrumb/>
          <Route exact path="/" render={() => <Redirect to="/blog"/>}/>
          <Blog/>
        </Content>
        <Footer/>
        <BackTop style={{
          right: '3%',
          bottom: '3%'
        }}/>
      </Layout>
    )
  }
}

export default App
