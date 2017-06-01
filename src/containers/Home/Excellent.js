/**
 * Created by Allan on 2017/6/1.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Lists from './List'

class Topics extends Component {
    render() {
        const length = this.props.topics.length
        return (
            <div className='panel panel-default no-margin-bottom-xs topic-lists reset-panel-xs'>
                <div className='panel-heading margin-xs'>
                    社区精华帖
                </div>
                <div className='row reset-row-xs'>
                    <div className='col-md-6'>
                        <Lists topics={this.props.topics.slice(0, length/2)} />
                    </div>
                    <div className='col-md-6'>
                        <Lists topics={this.props.topics.slice(length/2, length)} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapDispatchToProps)(Topics);