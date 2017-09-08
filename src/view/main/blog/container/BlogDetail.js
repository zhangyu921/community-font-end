import React, { Component } from 'react'
import { Card } from 'antd'
import axios from 'axios'
import markdownIt from 'markdown-it'
import './markdown.css'

const md = new markdownIt()

export default class BlogDetail extends Component {

  componentDidMount () {

    if (this.props.location.state) {
      this.refs.container.innerHTML = md.render(this.props.location.state.content || '')
    } else {
      axios.get('/topic/' + this.props.match.params.id)
        .then(data => {
          this.refs.container.innerHTML = md.render(data.data.data.content || '')
        })
    }
  }

  render () {
    return (
      <Card>
        <div className="markdown-body" ref="container"/>
      </Card>
    )
  }
}