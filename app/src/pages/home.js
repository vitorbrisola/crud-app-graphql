import React, {Component} from 'react';
import QuestionsQuery from '../relay/queries/questions';
import './components/quest.css'
import addQuestion from '../relay/mutations/addQuestion'
import QuestionInput from './components/questionInput'
import QuestionsList from './components/questionsListing'

export default class HomePage extends Component {

    state = {
        questions: [],
        questionAdd: 'No changes yet ...'
    }

    componentDidMount() {
        this.loadData()
    }

    getQuestions = () => {
        return this.state.questions;
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
                <QuestionsList data={this.state.questions} getData={this.getQuestions}/>
                <div className='qInput'>
                    <QuestionInput click={this.addNewQuestionLocally} change={this.handleQuestionText} />    
                </div>
            </div>
        );
    } 
}; 