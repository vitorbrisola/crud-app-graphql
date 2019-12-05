import React, {Component} from 'react';
import QuestCard from './components/questCard'

export default class HomePage extends Component {

    render(){
        return (
            <div>
                <h1>HomePage!</h1>
                <QuestCard />
            </div>
        );
    } 
}; 