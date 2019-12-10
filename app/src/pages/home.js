import React, {Component} from 'react';
import QuestionsQuery from '../relay/queries/questions';
import './components/quest.css'


import QuestionInput from './components/questionInput'
import QuestionsList from './components/question/list'

import addQuestion from '../relay/mutations/addQuestion'
import deleteQuestion from '../relay/mutations/deleteQuestion'


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


    addNewQuestionLocally = (newQuestion) => {
        console.log('parent: '+newQuestion )
    }

    onDeleteQuestion = async (index) => {
        // getting id
        const id = this.state.questions[index].id;
        console.log('1: '+ id)

        // deleting locally
        var array = [...this.state.questions]
        array.splice(index, 1);
        this.setState({questions: array});
        console.log('2: '+ id)

        // deleting from API
        await deleteQuestion(id)
    }

    render(){

        return (
            <div className="qCard">
                <QuestionsList 
                    data={this.getQuestions}
                    onDelete={this.onDeleteQuestion}
                />
                <div className='qInput'>
                    <QuestionInput />    
                </div>
            </div>
        );
    } 
}; 