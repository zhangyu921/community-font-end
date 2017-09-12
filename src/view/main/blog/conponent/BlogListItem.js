import React from 'react'
import { Card } from 'antd'
import { Link } from 'mirrorx'
import markdownIt from 'markdown-it'

const md = new markdownIt()

class BlogListItem extends React.PureComponent {

  componentDidMount(){
    this.refs.content.innerHTML = md.render(this.props.content || '')
  }

  render () {
    const {title, date, tags, _id} = this.props
    return (
      <Link
        to={{
          pathname: '/blog/' + _id,
          state: this.props
        }}
        style={{width: '100%', marginTop: 10}}
      >
        <Card
          title={title}
          extra={date}
          // bordered={false}
          style={{height: 180, width: '100%'}}
          bodyStyle={{padding: '12px 24px'}}
        >
          <div ref="content" style={{height: 100, overflow: 'hidden'}}/>
        </Card>
      </Link>
    )
  }
}

export default BlogListItem