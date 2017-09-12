import React, { Component } from 'react'
import { Route } from 'mirrorx'
import BlogList from './container/BlogList'
import BlogDetail from './container/BlogDetail'

export default class Blog extends Component {
  render () {
    return (
      <div>
        <Route exact path='/blog' component={BlogList}/>
        <Route exact path='/blog/:id' component={BlogDetail}/>
      </div>
    )
  }
}
