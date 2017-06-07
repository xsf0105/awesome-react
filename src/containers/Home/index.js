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
        // this.props.actions.addText(1111)
    }

    componentDidMount() {
        this.props.actions.fetchTopics({type: 'excellent'})
        // this.props.actions.addText({title: '《西游记》', pages: 101})
    }

    render() {
        console.log(this.props.books,23)
        return (
            <div className='home-wrap container'>
                <ToperNav />
                <br/>
                <br/>
                <br/>
                <br/>

                <button onClick={() => this.props.actions.addText({title: '《西游记》', pages: 101})}>点击触发action</button>
                <div>
                    {this.props.books}
                </div>


                <Excellent topics={this.props.topics} />
            </div>
        );
    }
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
const mapStateToProps = state => {
    // state 中的 postsByReddit 取出来作为一个常量
    const { postsByReddit, addText } = state
    let topics = [],
        results = postsByReddit['results']

    if (results)  topics = results.topics


    // let testDate = addText['results']
    //     console.log(addText['results'], 9)
    //     let results2 = addText['results']
    //     let testDate = results2

    console.log(addText, 4444)

    return {
        topics,
        books: addText
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