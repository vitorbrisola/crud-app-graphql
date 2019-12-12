import React from 'react'
import {Card, Checkbox, Button} from 'semantic-ui-react'

import AnswerQuery from '../../relay/queries/answer';
import addAnswer from '../../relay/mutations/addAnswer'
import deleteAnswer from '../../relay/mutations/deleteAnswer'
import updateAnswer from '../../relay/mutations/updateAnswer'

//import QuestionInput from './question/input';
import AnswerInput from './answer/input'

import './answer.css'

export default class Answer {

    constructor({id = null, text = '', isCorrect = false,reRender=null,onAdd=null,onDelete=null}){

		// answer data
        this.id = id
        this.text = text;
		this.isCorrect = isCorrect;
		
		// state management
		this.editing = false
		this.parentReRender = reRender;
		this.parentOnAdd = onAdd;
		this.parentOnDelete = onDelete;

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
		if(this.parentOnDelete !== null)this.parentOnDelete(this.id)
		if(this.id !== null) {deleteAnswer(this.id)}
    }

    update = async () => {
        // update question locally and from server		
		await updateAnswer(this.id,this.text,this.isCorrect)
			.then(res => { 
				this.reRender()
			})
		
		
	}
	
	edit = (text,isCorrect) => {
		this.text = text;
		this.isCorrect = isCorrect;
		
		if(this.id === null){
			this.add();	
		}else{
			this.update();
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
                    <div className='delete'>
                        <Button circular icon='trash' color='red' onClick={this.delete}/>
                    </div>
					<div className='delete'>
                        <Button circular icon='pencil' color='blue' onClick={()=>{this.editing=true;this.reRender()}}/>
                    </div>
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
