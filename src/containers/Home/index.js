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
        this.props.actions.fetchTopics({type: 'excellent'})
        this.handleTestButtonClick= this.handleTestButtonClick.bind(this);
    }

    componentDidMount() {
        // action 执行的事情
        // this.props.actions.testAction()
    }

    handleTestButtonClick() {
        const { dispatch } = this.props;
        this.props.actions.testAction2();
    }

    render() {
        return (
            <div className='home-wrap container'>
                <ToperNav />

                <br/>
                <br/>
                <br/>
                <br/>

                <button onClick={ this.handleTestButtonClick }>点击触发action2222222</button>
                <div>
                    有: {this.props.text}
                </div>

                <Excellent topics={this.props.topics} />
            </div>
        );
    }
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
const mapStateToProps = state => {
    // state 中的 postsByReddit 取出来作为一个常量，来源于reducers!!!
    const { postsByReddit, addText } = state


    let topics = [],
        results = postsByReddit['results']
    if (results)  topics = results.topics

    return {
        topics,
        text: addText
    }
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);














// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     };
// }