import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../action'

import './home.scss'
import './Index.scss'
import Excellent from './Excellent'
import ToperNav from './ToperNav'

class Home extends Component {

    constructor(props) {
        super(props);
        this.props.actions.fetchTopics({type: 'excellent'})
    }

    render() {
        return (
            <div className='home-wrap container'>
                <ToperNav />
                <Excellent topics={this.props.results.topics} />
            </div>
        );
    }
}


// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
// function mapStateToProps(state) {
//     console.log("全局state获取：",state.postsByReddit,23333)
//
//     const { postsByReddit } = state
//     let results = postsByReddit['results']
//     console.log(state,1);
//
//     return {
//         topics: results.topics
//     };
// }


const mapStateToProps = state => {
    // console.log(state, state.postsByReddit['results'],0)

    const { postsByReddit } = state // state 中的 postsByReddit 取出来作为一个常量

    console.log(postsByReddit['results'], state, "1st")

    let topics = [],
        replies = [],
        topic = {},
        results = postsByReddit['results']

    console.log(results);
        // console.log(postsByReddit['results'],1)

    // console.log(a.results, "a")

    if (results) {

        topics = results.topics
        console.log(topics)

        // console.log(a.results.topics, "第二次?")
        // console.log(postsByReddit, state, "2nd?")

        // console.log(postsByReddit['results'].topics, 2);
        //
        // switch (results.type) {
        //     case actions.TOPIC:
        //         topic = results.topic
        //         replies = results.replies
        //         break
        //     case actions.TOPICS:
        //         topics = results.topics
        //
        //         console.log(results.topics, 3);
        //         break
        //     default:
        //     {}
        // }
    }

    return {
        results: {
            topics
        }
    }
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(actions, dispatch)
// })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);