import React from 'react'
import {Card, Checkbox, Button} from 'semantic-ui-react'

import AnswerQuery from '../../relay/queries/answer';
import addAnswer from '../../relay/mutations/addAnswer'
import deleteAnswer from '../../relay/mutations/deleteAnswer'
//import updateAnswer from '../../relay/mutations/updateAnswer'

//import QuestionInput from './question/input';
import AnswerInput from './answer/input'

import './answer.css'

export default class Answer {

    constructor({id = null, text = '', isCorrect = false,reRender=null,onAdd=null}){

		// answer data
        this.id = id
        this.text = text;
		this.isCorrect = isCorrect;
		
		// state management
		this.editing = false
		this.parentReRender = reRender;
		this.parentOnAdd = onAdd;

		// constructor options
		if(id === null && text === ''){
			this.editing = true;
		}else if(id !== null && text === ''){
			this.load();
		}else if(id === null && text !== ''){
			this.add();
		}

    }

	reRender = () => {
		if(this.parentReRender !== null){this.parentReRender()}
	}

    load = async () => {
		// get answer data from server
		await AnswerQuery(this.id)
			.then(data => {
				//data saving
				this.text = data.answer.text;
				this.isCorrect = data.answer.isCorrect;
				//state management
				this.isOnServer = true;
				this.reRender()
			})
		.catch(err => console.log(err.message))
    }

    add = async () => {
		// add answer to server 
		await addAnswer(this.text,this.isCorrect)
			.then(res => {
				this.id = res.addAnswer.id;
				this.isOnServer = true;
				if(this.parentOnAdd !== null){this.parentOnAdd()}
			})
    }

    delete = () => {
		// delete answer from server
		if(this.id !== null) {deleteAnswer(this.id)}
    }

    update = async (newText,newCorrectness) => {
        // update question locally and from server
		this.text = newText
		this.isCorrect = newCorrectness
		
		this.reRender()
		
	}
	
	edit = (text,isCorrect) => {
		
		if(this.id === null){
			this.text = text;
			this.isCorrect = isCorrect;
			this.add();	
		}else{
			this.update(text,isCorrect);
		}
		this.editing=false;
		this.reRender()
		
	}

    render = () => {
		var display = '';
		if(this.editing){
			display = () => (
				<div className='answer'>
					<AnswerInput
						placeholder='Adicionar Resposta'
						value={this.text}
						onClick={this.edit}
					/>
				</div>
			)
		}else{
			display = () => (
				<div className='card'>
					<Card
						fluid
						description={this.text}
						color={this.isCorrect?'green':'red'}
					/>
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
