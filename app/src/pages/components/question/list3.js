import React,{Component} from 'react';
import {Button} from 'semantic-ui-react'

import './quest.css'

import QuestionCard from './card';
import QuestionInput from './input'

import QuestionsQuery from '../../../relay/queries/questions';


export default class QuestionList extends Component{

    constructor(props){
        super(props)
        this.state = {
            questions: []
        }
    }

    componentDidMount(){
        this.loadFromServer()
    }

    loadFromServer = async () =>{
        await QuestionsQuery()
            .then(data => {
                //this.setState({questions: data.questions});
                for(var question of data.questions){
                    this.newQuestion(question)
                }
            })
            .catch(err => console.log(err.message))
    }

    newQuestion = async (data) => {
        const newQuestion = (<QuestionCard
                                index={0}
                                data={data}
                                onDelete={this.deleteQuestion} />);
        await this.setState({questions: [...this.state.questions,newQuestion]})
    }

    addQuestion = async (newDescription) => {
        console.log(newDescription)
        const newQuestion = {id:null,description:newDescription}
        this.setState({questions: [...this.state.questions,newQuestion]})
    }

    deleteQuestion = async (e) => {      
        // deleting locally
        if (!e.target.id) {console.log('not working')}
        else {
            const index = e.target.id
            console.log(index)
            //await this.state.questions[index].delete()
            const array = [...this.state.questions]
            array.splice(index, 1);
            this.setState({questions: array});
        }
        
    }


    listRender = () => {
        if(this.state.questions.length === 0){
            return(<div>Nenhuma questão encontrada!</div>)
        }else{
            return(
                <div>
                    {this.state.questions.map((item,key) => (
                        <div key={key} className='qCard'>
                            {item}
                            <Button icon='trash' color='red' id={key} onClick={this.deleteQuestion}/>
                        </div>
                    ))}
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.listRender()}
                <div className='qInput'>
                    <QuestionInput click={this.addQuestion}/>    
                </div>
            </div>
        )
    }

}