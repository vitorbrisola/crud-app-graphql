import React, {Component} from 'react';

import './components/question/quest.css'

import QuestionsList from './components/question/list'

export default class HomePage extends Component {



    render(){

        return (
            <div className="qCard">
                <QuestionsList />
            </div>
        );
    } 
}; 