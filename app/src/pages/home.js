import React, {Component} from 'react';
import QuestCard from './components/questCard';
import QuestInput from './components/questionInput'
import RelayQuery from '../relay/query';
import './components/quest.css'
import { Input } from 'semantic-ui-react';


export default class HomePage extends Component {

    state = {
        questions: [],
        questionAdd: 'No changes yet ...'
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

    handleQuestionText = (e) => {
        this.setState({questionAdd: e.target.value})
    }

    handleQuestionInput = () => {
        console.log(this.state.questionAdd)
    }

    render(){

        return (
            <div className="qCard">
                <QuestCard data={this.state.questions}/>
                <div className='qInput'>
                    <Input 
                        fluid 
                        action={{
                            color: 'teal',
                            icon: 'check',
                            onClick: () => this.handleQuestionInput(),
                        }}
                        onChange={this.handleQuestionText}
                        placeholder='Adicionar Questão...' 
                    />
                </div>
            </div>
        );
    } 
}; 