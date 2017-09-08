import React, { Component } from 'react'
import { Button, Checkbox, Form, Icon, Input, Modal } from 'antd'
import './index.css'
import axios from 'axios'

const FormItem = Form.Item

class NormalLoginForm extends React.Component {
  state = {
    loading: false
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.setState({loading: true})
        axios.post('/login', {
          phoneNumber: values.phoneNumber,
          password: values.password
        })
          .then(res => {
            console.log(res.data)
          })
          .catch(err => {
            console.log(err.response.data)
          })
          .then(() => {
            this.setState({loading: false})
          })
      }
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    const {loading} = this.state
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('phoneNumber', {
            rules: [{required: true, message: 'Please input your phone number!'}],
          })(
            <Input prefix={<Icon type="phone" style={{fontSize: 13}}/>} placeholder="Phone number"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="Password"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    )
  }
}
const WrappedLoginForm = Form.create()(NormalLoginForm)
export default WrappedLoginForm

export class LoginButton extends Component {
  state = {
    visible: false,
    confirmLoading: false
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
      <div>
        <Button type="primary" ghost onClick={this.showModal}>登录 / 注册</Button>
        <Modal
          title="登录/注册"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <WrappedLoginForm/>
        </Modal>
      </div>
    )
  }
}
