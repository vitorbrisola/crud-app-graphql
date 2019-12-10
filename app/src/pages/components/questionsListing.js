import React, {Component} from 'react';
import { Card} from 'semantic-ui-react'
import './quest.css'


export default class QuestionsList extends Component {

    constructor(props){
        super(props)

        this.state = {
            questions: []
        };

        this.loadData();
    }

    loadData() {
        this.setState({questions: this.props.questions})
    }

    render () {
        if(questions.length === 0){return <div>Nenhuma questão Encontrada!</div>}
        return (
            <Card.Group items={dataToCard(questions)} />
        );
    }

};

const dataToCard = (data) => {
    const cards = []
    for(var [i,question] of data.entries()){
        // default card layout
        var newCard = {
            header: 'Questão ',
            fluid: true
        }
        // data extraction
        newCard.header += (i+1).toString();
        newCard.description = question.description
        
        cards.push(newCard)
    }
    return cards
};