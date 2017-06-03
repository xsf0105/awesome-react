/**
 * Created by Allan on 2017/6/1.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Lists from './List'

import * as actions from '../../action'
import {Link} from 'react-router'
import TopicInfo from './TopicInfo'
import './lists.scss'


class Topics extends Component {

    componentWillMount() {
        // this will update the nodes on state

        // console.log(this.nodes,2555)
    }

    render() {
        // const { nodes } = this.state
        console.log(this.props.nodes,244)
        return (
            <div className='panel panel-default no-margin-bottom-xs topic-lists reset-panel-xs'>
                <div className='panel-heading margin-xs'>
                    社区精华帖
                </div>
                <div className='row reset-row-xs'>
                    <div className='col-md-6'>
                        <div className='panel-body'>
                            <button onClick={this.props.loadList}>load lists</button>
                            <li>test0</li>
                            <li>test1</li>
                            <li>test2</li>
                            <li>test3</li>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
    console.log("全局state获取：",state.postsByReddit)
    return {
        nodes: state
    };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    consoel.log("全局action获取：",1)
    return {
        loadList: () => dispatch(fetchTopics())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topics);

// export default class Topics extends Component {
//     render() {
//         const length = this.props.topics.length
//         return (
//             <div className='panel panel-default no-margin-bottom-xs topic-lists reset-panel-xs'>
//                 <div className='panel-heading margin-xs'>
//                     社区精华帖
//                 </div>
//                 <div className='row reset-row-xs'>
//                     <div className='col-md-6'>
//                         <Lists topics={this.props.topics.slice(0, length/2)} />
//                     </div>
//                     <div className='col-md-6'>
//                         <Lists topics={this.props.topics.slice(length/2, length)} />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
//
// class Topics extends Component {
//     render() {
//         const length = this.props.topics.length
//         return (
//             <div className='panel panel-default no-margin-bottom-xs topic-lists reset-panel-xs'>
//                 <div className='panel-heading margin-xs'>
//                     社区精华帖
//                 </div>
//                 <div className='row reset-row-xs'>
//                     <div className='col-md-6'>
//                         <Lists topics={this.props.topics.slice(0, length/2)} />
//                     </div>
//                     <div className='col-md-6'>
//                         <Lists topics={this.props.topics.slice(length/2, length)} />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(actions, dispatch)
// })
//
// export default connect(mapDispatchToProps)(Topics);
//
