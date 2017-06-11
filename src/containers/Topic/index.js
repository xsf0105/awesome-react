import React, { Component } from 'react';
import TopicInfo from './TopicInfo';
import Replies from './Replies';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action'

import './Markdown.scss';

class Topic extends React.Component {

  constructor(props) {
    super(props);
    // 发送action，请求数据
    this.props.actions.fetchTopic(this.props.match.params.id)
  }

  render() {
    if(this.props.topic != '{}'){
      const isEmpty = !this.props.topic;
      console.log(isEmpty,3444)
      return (
          <div className='wrap'>
            { !isEmpty &&
            <div className='panel panel-default topic-wrap'>
              <div className='panel-heading media'>
                <div className='media-body'>
                  <h4>{this.props.topic.title}</h4>
                  <TopicInfo topic={this.props.topic} isShow='true'></TopicInfo>
                </div>
                <a className="media-right" href="#">

                </a>
              </div>
              <div className='panel-body markdown'>
                <span dangerouslySetInnerHTML={{ __html: this.props.topic.body_html}} />
              </div>
              <div className='panel-footer'>
              </div>
            </div>
            }
            { isEmpty && <h2>Loading...</h2> }
          </div>
      );
    }else{
      console.log(this.props.topic,6666)
      return false;
    }
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
)(Topic)