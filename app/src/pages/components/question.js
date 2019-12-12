import React from 'react'
import {Card, Button} from 'semantic-ui-react'

import QuestionQuery from '../../relay/queries/question';
import addQuestion from '../../relay/mutations/addQuestion'
import deleteQuestion from '../../relay/mutations/deleteQuestion'
import updateQuestion from '../../relay/mutations/updateQuestion'

import './quest.css'

import Answer from './answer'
import QuestionInput from './question/input'

export default class Question {

    constructor({id, description = null,reRender=null}){

        // question data
        this.id = id
        this.description = (description === null)?'':description;
        this.answers = [new Answer({reRender:this.reRender,onAdd:this.addAnswer})];
        // state management
	    this.editing = false;
        this.isOnServer = false;
        this.fatherReRender = reRender;
        // object monting
        if(id !== null && description === null){            
            this.load()
        }else if(id === null && description !== null){
            this.add()
        }else if(id === null && description === null){
	        this.editing = true;
	    }

    }

    reRender = () => {
        if(this.fatherReRender !== null){this.fatherReRender()}
    }

    load = async () => {
        // get question data from server, based on the data id
        await QuestionQuery(this.id)
            .then(data => {
                this.description = data.question.description;
                this.isOnServer = true;
                this.reRender()
            })
            .catch(err => console.log(err.message))
    }

    add = async () => {
        // add question on server based on its description and answers
        
        await addQuestion(this.description)
            .then(res => {
                this.id = res.addQuestion.id;
                this.isOnServer = true;
            })
    }

    delete = async () => {
        // delete question from server based on its id
        if(this.isOnServer){
            // erase all answers
            while(this.answers.length > 0){
                const answer = this.answers.pop()
                answer.delete()
            }
            // erase question
            await deleteQuestion(this.id)
        }
    }

    update = async (newDescription) => {
        // update question locally and from server
        this.description = newDescription
        const answersIds = []
        for(var answer of this.answers){
            if(answer.id !== null)answersIds.push(answer.id)
        }
        await updateQuestion(this.id,this.description,answersIds)
    }

    edit = (values) => {
        // edit questing adding or updating to server
        if(this.isOnServer){
            this.update(values)
        }else{
            this.description = values
            this.add()
        }
        this.editing = false;
        this.reRender();
    }

    setNewEmptyAnswer = () => {
        
    }

    addAnswer = () => {
        console.log('test')
        this.answers.push(new Answer({reRender:this.reRender,onAdd:this.addAnswer}));
        this.reRender()
    }

    render = (index) => {
        var display = () => (<div>Loading...</div>)
        if (this.editing){
            display = () => (
                <QuestionInput 
                    value={this.description} 
                    onClick={this.edit}
                />
            )
        }else{
            display = () => (
                <div>
                    <div className='editButtons'>
                        <Button icon='pencil' color='blue' onClick={()=>{
                            this.editing=true
                            this.reRender()
                        }}/>
                    </div>
                    <Card
                        fluid
                        header={'Questão '+(index+1).toString()}
                        description={this.description}
                    />
                    <div>
                        {this.answers.map((item,key) => {
                            return (
                                <div key={key} className='answers'>
                                    {item.render()}
                                </div>)
                        })}
                    </div>
                </div>
            )
        }
        return (
            <div>
                {display()}
            </div>
            
        )
    }


}
