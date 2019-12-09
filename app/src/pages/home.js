import React, {Component} from 'react';
import QuestCard from './components/questCard';
import QuestionsQuery from '../relay/queries/questions';
import './components/quest.css'
import addQuestion from '../relay/mutations/addQuestion'
import QuestionInput from './components/questionInput'

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

    addNewQuestionLocally = (newQuestion) => {
        console.log('parent: '+newQuestion )
    }

    render(){

        return (
            <div className="qCard">
                <QuestCard data={this.state.questions}/>
                <div className='qInput'>
                    <QuestionInput click={this.addNewQuestionLocally} change={this.handleQuestionText} />    
                </div>
            </div>
        );
    } 
}; 