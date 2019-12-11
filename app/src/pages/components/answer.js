import React from 'react'
import {Card, Button,Checkbox} from 'semantic-ui-react'

//import QuestionQuery from '../../relay/queries/question';
//import addQuestion from '../../relay/mutations/addQuestion'
//import deleteQuestion from '../../relay/mutations/deleteQuestion'
//import updateQuestion from '../../relay/mutations/updateQuestion'

import QuestionInput from './question/input';

import './answer.css'

export default class Answer {

    constructor(onDelete,id = null, text = null, isRight = false){

        this.id = id
        this.text = (text === null)? '':text;
        this.isRight = isRight;
		this.editing = false

		this.onDelete = onDelete;

	if(id === null && text === null){
		this.editing = true;
	}else if(id !== null && text === null){
		this.load();
	}else if(id === null && text !== null){
		this.add();
	}

    }

    load = async () => {
        // get answer data from server
    }

    add = async () => {
        // add answer to server 
    }

    delete = async () => {
		// delete answer from server 
		this.onDelete()
    }

    update = async (newText) => {
        // update question locally and from server
		this.text = newText
		//this.isRight = newRightness
		this.editing=false
		
    }

    render = (index,callback) => {
	var display = ''
	if(this.editing){
		display = () => (
			<QuestionInput
				placeholder='Adicionar Resposta'
				value={this.text}
				onClick={(res) => {
					this.update(res)
					callback()
				}}
			/>
		)
	}else{
		display = () => (
			<div className='card'>
				<Card
					fluid
						description={this.text}
				/>
				<Button icon='pencil' color='blue' onClick={()=> {this.editing=true}}/>
				<Button icon='trash' color='red' onClick={this.delete}/>
			</div>
		)
	}

	return (
		<div className='answer'>
			<div className='checkbox'>
				<Checkbox radio/>
			</div>
			<div className='input'>
				{display()}
			</div>
			
		</div>
	)

        	

            
        	
	
    }

}
