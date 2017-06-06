import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action'

import Excellent from './Excellent'
import ToperNav from './ToperNav'
import { Link, NavLink } from 'react-router-dom';

import './home.scss'
import './Index.scss'

class Home extends Component {
    constructor(props) {
        super(props);
        console.log(1)
        this.props.actions.fetchTopics({type: 'excellent'})
    }
    render() {
        console.log(2)
        return (
            <div className='home-wrap container'>
                <ToperNav />
                <Excellent topics={this.props.topics} />
            </div>
        );
    }
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
const mapStateToProps = state => {
    console.log(3)
    const { postsByReddit } = state // state 中的 postsByReddit 取出来作为一个常量
    let topics = [],
        results = postsByReddit['results']
    if (results)  topics = results.topics
    return {
        topics
    }
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     };
// }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);