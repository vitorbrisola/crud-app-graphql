import React from 'react';
import { Card} from 'semantic-ui-react'
import './quest.css'


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

const QuestCard = ({data}) => {
    if(data.length === 0){return <div>Loading ...</div>}
    return (
        <Card.Group items={dataToCard(data)} />
    );
}; 

export default QuestCard;