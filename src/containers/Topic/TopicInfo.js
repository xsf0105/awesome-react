/**
 * Created by Allan on 2017/6/4.
 */
import React, { Component } from 'react';
import {Format} from '../Format';

export default class TopicInfo extends Component {

    render() {

            console.log(this.props,23333)
            let info = ''
            let hits = ''
            if (this.props.isShow === 'true') {
                info = <span>发布于 { Format.date(this.props.topic.created_at) }</span>
                hits = <span>{this.props.topic.hits} 次阅读</span>
            }

            return(
                <div className='infos'>
                    <span className='separator'>{this.props.topic.node_name}</span>
                    •
                    { this.props.topic.replied_at !== null ?
                        <span className='separator'>
              { info }
                            最后由
              <span className='separator'>{this.props.topic.last_reply_user_login}</span>
              回复于 {Format.date(this.props.topic.replied_at)}
            </span>
                        :
                        <span className='separator'>发布于 { Format.date(this.props.topic.created_at) }</span>
                    }
                    { hits }
                </div>
            );

    }
}
