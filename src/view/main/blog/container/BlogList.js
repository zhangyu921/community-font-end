import React, { Component } from 'react'
import { Card, Pagination } from 'antd'
import axios from 'axios'
import BlogListItem from '../conponent/BlogListItem'
import mirror, { connect, actions } from 'mirrorx'

mirror.model({
  name: 'blogList',
  initialState: {
    currentPage: 1,
    pageSize: 10,
    total: 10,
    blogArr: [],
    isLoading: true
  },
  reducers: {
    request (state) {return {...state, isLoading: true}},
    receive (state, data) {
      return {
        ...state,
        isLoading: false,
        blogArr: data.data,
        total: data.count,
        currentPage: data.page,
        pageSize: data.pageSize,
      }
    }
  },
  effects: {
    async fetchListData (page, pageSize) {
      actions.blogList.request()
      await axios.get('/topic', {params: {page, pageSize}})
        .then(res => {
          actions.blogList.receive(res.data)
        })
    }
  }

})

class BlogList extends Component {

  componentDidMount () {
    actions.blogList.fetchListData(1, this.props.pageSize)
  }

  onPageChange = page => {
    actions.blogList.fetchListData(page, this.props.pageSize)
  }

  render () {
    console.log(this.props.blogList)
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: -10
      }}>
        {do {
          if (this.props.isLoading) {
            <Card loading={true} style={{width: '100%'}}/>
          }
          else {
            this.props.blogArr.map(item => (
              <BlogListItem
                _id={item._id}
                title={item.title}
                content={item.content}
                isLoading={this.props.isLoading}
              />
            ))
          }
        }}
        <Pagination
          style={{marginTop: 40}}
          current={this.props.currentPage}
          total={this.props.total}
          onChange={this.onPageChange}
        />
      </div>
    )
  }
}

export default connect(state => {
  return state.blogList
})(BlogList)

