import React, { Component } from 'react'
import { Card, Pagination } from 'antd'
import axios from 'axios'
import BlogListItem from '../conponent/BlogListItem'

export class BlogList extends Component {
  constructor (p) {
    super(p)
    this.state = {
      currentPage: 1,
      pageSize: 10,
      total: 10,
      blogArr: [],
      isLoading: true
    }
  }

  fetchListData = (page, pageSize) => {
    this.setState({isLoading: true})
    axios.get('/topic', {params: {page, pageSize}})
      .then(res => {
        this.setState({
          blogArr: res.data.data,
          currentPage: parseInt(res.data.page),
          total: parseInt(res.data.count),
          isLoading: false
        })
      })
  }

  componentDidMount () {
    this.fetchListData(1)
  }

  onPageChange = page => {
    this.fetchListData(page, this.state.pageSize)
  }

  render () {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: -10
      }}>
        {do {
          if (this.state.isLoading) {
            <Card loading={true} style={{width: '100%'}}/>
          }
          else {
            this.state.blogArr.map(item => (
              <BlogListItem
                _id={item._id}
                title={item.title}
                content={item.content}
                isLoading={this.state.isLoading}
              />
            ))
          }
        }}
        <Pagination
          style={{marginTop: 40}}
          current={this.state.currentPage}
          total={this.state.total}
          onChange={this.onPageChange}
        />
      </div>
    )
  }
}

