import React,{Component} from 'react';
import {Card, Button} from 'semantic-ui-react'

import QuestionQuery from '../../../relay/queries/question';
import addQuestion from '../../../relay/mutations/addQuestion'
import deleteQuestion from '../../../relay/mutations/deleteQuestion'

import './quest.css'



export default class QuestionCard extends Component{

    constructor(props){
        super(props)
        this.state ={
            id: null,
            index: 0,
            description: 'Loading...',
            answers: []
        }
    }

    componentDidMount(){
        this.setState({index: this.props.index})
        if(this.props.data.id !== null){            
            this.load()
        }else{
            this.add()
        }
    }


    load = async () => {
        // get question data from server, based on the data id
        const id = this.props.data.id;
        this.setState({id:id})
        await QuestionQuery(id)
            .then(data => {
                this.setState({description: data.question.description});
            })
            .catch(err => console.log(err.message))
    }

    add = async () => {
        // add question on server based on its description and answers
        const {description} = this.props.data;
        //var newQuestion = {description: description}
        this.setState({description:description})
        await addQuestion(description)
            .then(res => {
                const id = res.addQuestion.id;
                this.setState({id:id})
            })
    }

    delete = async () => {
        // delete question from server based on its id
        await deleteQuestion(this.state.id)
        return true
    }

    update = () => {
        // update question locally and from server
        console.log('Update')
        return true
    }

    render(){
        return (
            <div>
                <Card
                    fluid
                    header={'Questão '+(this.state.index+1).toString()}
                    description={this.state.description}
                />
            </div>
            
        )
    }

}