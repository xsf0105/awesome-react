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
    // 发送action
    this.props.actions.fetchTopic(this.props.match.params.id)
  }

  render() {

    return (
        <div className='wrap'>
          6456455
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