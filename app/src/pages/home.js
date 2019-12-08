import React, {Component} from 'react';
import QuestCard from './components/questCard';
import QuestInput from './components/questionInput'
import RelayQuery from '../relay/query';
import './components/quest.css'


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
            <div className="qCard">
                <QuestCard data={this.state.questions}/>
                <div className='qInput'><QuestInput /></div>
            </div>
        );
    } 
}; 