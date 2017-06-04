import React, { Component } from 'react';
import TopicInfo from './TopicInfo';
import Replies from './Replies';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action'

import './Markdown.scss';

class Topics extends React.Component {

  constructor(props) {
    super(props);
    this.props.actions.fetchTopic(this.props.match.params.id)
  }

  render() {
    const isEmpty = !this.props.results.topic.title

    return (
        <div className='wrap'>
          { !isEmpty &&
          <div className='panel panel-default topic-wrap'>
            <div className='panel-heading media'>
              <div className='media-body'>
                <h4>{this.props.results.topic.title}</h4>
                <TopicInfo topic={this.props.results.topic} isShow='true'></TopicInfo>
              </div>
              <a className="media-right" href="#">
                <img className='img-circle img-width-50' src={this.props.results.topic.user.avatar_url} role='presentation'/>
              </a>
            </div>
            <div className='panel-body markdown'>
              <span dangerouslySetInnerHTML={{ __html: this.props.results.topic.body_html}} />
            </div>
            <div className='panel-footer'>
            </div>
          </div>
          }
          { isEmpty && <h2>Loading...</h2> }
        </div>
    );
  }
}

const mapStateToProps = state => {
  // state 中的 postsByReddit 取出来作为一个常量
  const { postsByReddit } = state
  let replies = [],
      topic = {},
      results = postsByReddit['results']
  if (results){
    topic = results.topic
    replies = results.replies

    console.log(topic,121212)
  }

  return {
    replies,
    topic
  }
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topics)