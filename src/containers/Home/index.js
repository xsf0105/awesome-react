import React, { Component, PropTypes } from 'react'
import './home.scss'
import './Index.scss'

import Excellent from './Excellent'
import ToperNav from './ToperNav'
import ListItems from './ListItems'

class Home extends Component {

    constructor(props) {
        super(props);
        // this.props.actions.fetchTopics({type: 'excellent'})
    }

    render() {
        return (
            <div className='home-wrap container'>
              <ToperNav />
              <ListItems></ListItems>
            </div>
        );
    }
}

export default Home;
