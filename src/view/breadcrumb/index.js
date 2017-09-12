import React from 'react'
import { Breadcrumb } from 'antd'
import { Link, withRouter } from 'mirrorx'

const breadcrumbNameMap = {
  '/blog': 'blog',
}

const BreadCrumb = (props) => {
  const {location} = props
  const pathSnippets = location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url] || (location.state && location.state.title) || ''}
        </Link>
      </Breadcrumb.Item>
    )
  })
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems)

  return (
    <Breadcrumb style={{margin: '12px 0'}}>
      {breadcrumbItems}
    </Breadcrumb>
  )
}

export default withRouter(BreadCrumb)