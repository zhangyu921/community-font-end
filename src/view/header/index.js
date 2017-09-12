import React, { Component } from 'react'
import { Button, Layout, Menu, Modal } from 'antd'
import { Link } from 'mirrorx'
// import {LoginButton} from '../login/index'

export default class Header extends Component {
  constructor (p) {
    super(p)
    this.state = {
      visible: false,
      confirmLoading: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleOk = () => {
    this.setState({
      confirmLoading: true,
    })
  }
  handleCancel = () => {
    console.log('Clicked cancel button')
    this.setState({
      visible: false,
    })
  }

  render () {
    return (
      <Layout.Header style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <div>
          <p style={{fontSize:24,color:'#fff',letterSpacing:3}}>Yu's</p>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/blog">Blog</Link></Menu.Item>
        </Menu>
        {/*<LoginButton/>*/}
      </Layout.Header>
    )
  }
}