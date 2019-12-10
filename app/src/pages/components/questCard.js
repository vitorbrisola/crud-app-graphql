import React from 'react';
import {Card, Button} from 'semantic-ui-react'
import './quest.css'


const dataToCard = (data) => {
    const cards = []
    for(var [i,question] of data.entries()){
        // default card layout
        var newCard = {
            header: 'Questãooo ',
            fluid: true,
            extra: (<Button icon='trash' color='red' />)
        }
        // data extraction
        newCard.header += (i+1).toString();
        newCard.description = question.description
        
        cards.push(newCard)
    }
    return cards
};

const QuestCard = ({data}) => {
    if(data.length === 0){return <div>Nenhuma questão Encontrada!</div>}
    return (
        <Card.Group items={dataToCard(data)}  />
    );
}; 

export default QuestCard;