import React, {Component} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './quest.css'


const dataToCard = (data) => {
    const cards = []
    for(var question of data){
        var newCard = {
            header: 'Questão ',
            fluid: true
        }
        newCard.header += question.id.toString();
        newCard.description = question.description
        cards.push(newCard)
    }
    return cards
};

const QuestCard = ({data}) => {
        return (
            <div className="qCard">
                <Card.Group items={dataToCard(data)} />
            </div>
        );
}; 

export default QuestCard;