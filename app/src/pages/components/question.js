import React from 'react'
import {Card, Button} from 'semantic-ui-react'

import QuestionQuery from '../../relay/queries/question';
import addQuestion from '../../relay/mutations/addQuestion'
import deleteQuestion from '../../relay/mutations/deleteQuestion'

import './quest.css'



export default class Question {

    constructor(id, description = null){

        this.id = id
        if(description === null) {this.description = 'Loading...'}
        else{this.description = description}
        this.answers = [];

        if(id !== null && description === null){            
            this.load()
        }else if(id === null && description !== null){
            this.add()
        }

    }

    load = async () => {
        // get question data from server, based on the data id
        await QuestionQuery(this.id)
            .then(data => {
                this.description = data.question.description;
            })
            .catch(err => console.log(err.message))
    }

    add = async () => {
        // add question on server based on its description and answers
        
        await addQuestion(this.description)
            .then(res => {
                this.id = res.addQuestion.id;
            })
    }

    delete = async () => {
        // delete question from server based on its id
        await deleteQuestion(this.id)
    }

    update = () => {
        // update question locally and from server
        console.log('Update')
    }

    getData(){return({
        id: this.id,
        description: this.description
    })}

    render = (index) => {
        return (
            <div>
                <Card
                    fluid
                    header={'Questão '+(index+1).toString()}
                    description={this.getDescription()}
                />
            </div>
            
        )
    }

}
