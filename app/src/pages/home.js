import React, {Component} from 'react';
import QuestCard from './components/questCard';
import questions from '../data/mockQuestions';
import RelayQuery from '../relay/query';



export default class HomePage extends Component {

    state = {
        questions: []
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = async () =>{
        await RelayQuery()
            .then(data => {
                this.setState({questions: data.questions});
            })
            .catch(err => console.log(err.message))
    }

    render(){

        return (
            <div>
                <QuestCard data={this.state.questions}/>
            </div>
        );
    } 
}; 