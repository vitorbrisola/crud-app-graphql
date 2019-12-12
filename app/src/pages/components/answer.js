import React from 'react'
import {Card, Button,Checkbox} from 'semantic-ui-react'

//import QuestionQuery from '../../relay/queries/question';
//import addQuestion from '../../relay/mutations/addQuestion'
//import deleteQuestion from '../../relay/mutations/deleteQuestion'
//import updateQuestion from '../../relay/mutations/updateQuestion'

import QuestionInput from './question/input';

import './answer.css'

export default class Answer {

    constructor({id = null, text = '', isRight = false,reRender=null,onAdd=null}){

		// answer data
        this.id = id
        this.text = text;
		this.isRight = isRight;
		
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
    }

    add = async () => {
		// add answer to server 
		this.id = 1;
		if(this.parentOnAdd !== null){this.parentOnAdd()}
    }

    delete = async () => {
		// delete answer from server
		 
    }

    update = async (newText) => {
        // update question locally and from server
		this.text = newText
		//this.isRight = newRightness
		
		this.reRender()
		
	}
	
	edit = (values) => {
		
		if(this.id === null){
			this.text = values;
			this.add();	
		}else{
			this.update(values);
		}
		this.editing=false;
		this.reRender()
		
	}

    render = () => {
		var display = '';
		if(this.editing){
			display = () => (
				<QuestionInput
					placeholder='Adicionar Resposta'
					value={this.text}
					onClick={this.edit}
				/>
			)
		}else{
			display = () => (
				<div className='card'>
					<Card
						fluid
							description={this.text}
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
