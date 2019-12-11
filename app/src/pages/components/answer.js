import React from 'react'
import {Card, Button,Checkbox} from 'semantic-ui-react'

//import QuestionQuery from '../../relay/queries/question';
//import addQuestion from '../../relay/mutations/addQuestion'
//import deleteQuestion from '../../relay/mutations/deleteQuestion'
//import updateQuestion from '../../relay/mutations/updateQuestion'

import QuestionInput from './question/input';

import './answer.css'

export default class Answer {

    constructor(id = null, text = null, isRight = false){

        this.id = id
        this.text = (text === null)? "Loading...":text;
        this.isRight = isRight;
		this.editing = false

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
    }

    update = async (newText) => {
        // update question locally and from server
        this.text = newText
		//this.isRight = newRightness
    }

    render = (index) => {
	if(this.editing){
		return (
			<div className='answer'>
				<div className='checkbox'>
					<Checkbox radio/>
				</div>
				<div className='input'>
					<QuestionInput
						placeholder='Adicionar Resposta'
						onClick={this.update}
					/>
				</div>
				
			</div>
		)
	}else{
        	return (
            	<div >
                	<Card
                	    fluid
               	     	    header={'Alternativa '+ index.toString()}
                    	    description={this.text}
                	/>
            	</div>
            
        	)
	}
    }

}
