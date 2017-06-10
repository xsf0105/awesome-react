/**
 * Created by Allan on 2017/6/1.
 */
import React, { Component } from 'react';

export default class Promote extends Component {
    render() {
        return(
            <div className='panel panel-default'>
                <div className='panel-body'>
                    推广
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href='#'>RubyChina 克隆 | React.js</a>
                    </li>
                    <li className="list-group-item">
                        <a href='#'>V2EX 克隆 | Vue.js</a>
                    </li>
                    <li className="list-group-item">
                        <a href='#'>Rina's Blog</a>
                    </li>
                    <li className="list-group-item">
                        <a href='#'>ECS</a>
                    </li>
                    <li className="list-group-item">
                        <a href='#'>RubyChina Clone Github</a>
                    </li>
                    <li className="list-group-item">
                        <a href='#'>V2EX Clone Github</a>
                    </li>
                    <li className="list-group-item">
                        <a href='#'>Rina's GitHub</a>
                    </li>
                </ul>
            </div>
        );
    }
}

