import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react'
import './quest.css'


class QCard {

    constructor(id,description,onDelete) {
        this.onDeleteCallback = onDelete;
        this.id = id;
        this.card = {
            header: 'Questãoo '+(id+1).toString(),
            fluid: true,
            description: description,
            extra: (<Button icon='trash' color='red' onClick={this.onDeleteClick} />)
        }
    }

    onDeleteClick = () => {
        this.onDeleteCallback(this.id)
    }

    get = () => {
        return this.card;
    }
}

export default class QuestionsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            questionsList: []
        };
    }
    
    onDeleteQuestion = (id) => {
        this.props.onDelete(id)
    }

    cardsLayout = (data) => {
        const cards = []
        for(var [i,question] of data.entries()){
            var card = new QCard(i,question.description,this.onDeleteQuestion)
            cards.push(card.get())
        }
        return cards
    }


    render () {
        if(this.props.getData() === 0){return <div>Nenhuma questão Encontrada!</div>}
        return (
            <Card.Group items={this.cardsLayout(this.props.getData())} />
        );
    }

};

