import React, {Component} from 'react';
import GraphQLApp from './components/question';

export default class QuizPage extends Component {


    render() {
        return (
            <div>
                <h1>Quiz!</h1>
                <GraphQLApp />
            </div>
        );
    }
}