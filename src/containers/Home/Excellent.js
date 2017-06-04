/**
 * Created by Allan on 2017/6/1.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TopicInfo from './TopicInfo'
import './lists.scss'

export default class Topics extends Component {

    render() {
        let listItems = this.props.topics.map(function (topic) {
            return (
                <div className="media topic" key={topic.id}>
                    <a className="media-left" href="#">
                        <img className='img-circle img-width-50' src={topic.user.avatar_url} role="presentation" />
                    </a>
                    <div className="media-body">
                        <Link to={`/topics/${topic.id}`} className='title'>{topic.title}</Link>
                        {topic.excellent && <span ref='data' className='glyphicon glyphicon-heart left' title='精华帖'></span>}
                        <TopicInfo topic={topic}></TopicInfo>
                    </div>
                    <div className='media-right count'>
                        <span className='badge'>{topic.replies_count}</span>
                    </div>
                </div>
            );
        });

        const length = this.props.topics.length
        
        return (
            <div className='panel panel-default no-margin-bottom-xs topic-lists reset-panel-xs'>
                <div className='panel-heading margin-xs'>
                    社区精华帖
                </div>
                <div className='row reset-row-xs'>
                    <div className='col-md-6'>
                        <div className='panel-body'>
                            { listItems.slice(0, length/2) }
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='panel-body'>
                            { listItems.slice(length/2, length) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
