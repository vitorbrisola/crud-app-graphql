import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react'
import './quest.css'


class QCard {

    constructor(id,description) {
        this.id = id;
        this.card = {
            header: 'Questãoo '+id.toString(),
            fluid: true,
            description: description,
            extra: (<Button icon='trash' color='red' onClick={this.onDeleteClick} />)
        }
    }

    onDeleteClick = () => {
        console.log('hi '+this.id)
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

    cardsLayout = (data) => {
        const cards = []
        for(var [i,question] of data.entries()){
            var card = new QCard((i+1),question.description)
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

