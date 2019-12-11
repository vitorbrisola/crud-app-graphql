import React,{Component} from 'react';
import {Card,Button} from 'semantic-ui-react'

import './quest.css'

import QuestionInput from './input'

import QuestionsQuery from '../../../relay/queries/questions';
import Question from './question'

export default class QuestionList extends Component{

    constructor(props){
        super(props)
        this.state = {
            questions: []
        }
    }

    componentDidMount(){
        this.loadIds()
    }

    loadIds = async () =>{
        await QuestionsQuery()
            .then(data => {
                for (var question of data.questions){
                    this.addQuestion(question.id,null)
                }

            })
            .catch(err => console.log(err.message))
    }

    addQuestion = (id,description) => {
        const newQuestion = new Question(id,description);
        this.setState({questions: [...this.state.questions,newQuestion]})
    }


    listRender = () => {
        if(this.state.questions.length === 0){
            return(<div>Nenhuma questão encontrada!</div>)
        }else{
            return(
                <div>
                    {this.state.questions.map((item,key) => (
                        <div key={key} className='qCard'>
                            <Card
                                fluid
                                header={'Questão '+(key+1).toString()}
                                description={item.getData().description}
                            />
                        </div>
                    ))}
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <div>
                    {this.state.questions.map((item,key) => (
                        <div key={key} className='qCard'>
                            <Card
                                fluid
                                header={'Questão '+(key+1).toString()}
                                description={item.getData().description}
                            />
                        </div>
                    ))}
                </div>
                <div className='qInput'>
                    <QuestionInput click={this.addQuestion}/>    
                </div>
            </div>
        )
    }

}