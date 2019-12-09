import React, {Component} from 'react';
import QuestCard from './components/questCard';
import QuestionsQuery from '../relay/queries/questions';
import './components/quest.css'
import { Input } from 'semantic-ui-react';
import addQuestion from '../relay/mutations/addQuestion'


export default class HomePage extends Component {

    state = {
        questions: [],
        questionAdd: 'No changes yet ...'
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = async () =>{
        await QuestionsQuery()
            .then(data => {
                this.setState({questions: data.questions});
            })
            .catch(err => console.log(err.message))
    }

    handleQuestionText = (e) => {
        this.setState({questionAdd: e.target.value})
    }

    handleQuestionInput = async () => {
        console.log(this.state.questionAdd)
        //const callback = (res) => {console.log(res)}
        await addQuestion(this.state.questionAdd)
            .then( res => console.log(res))
            .catch( err => console.log(err))
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