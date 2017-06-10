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
        console.log(this.props, "首页组件")
    }
    
    render() {
        return (
            <div className='home-wrap container'>
                <ToperNav />
                <Excellent topics={this.props.topics} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { postsByReddit, addText } = state
    let topics = [],
        results = postsByReddit['results']
    if (results)  topics = results.topics
    return {
        topics,
        text: addText
    }
}

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