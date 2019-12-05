import React, {Component} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './quest.css'

const CardExampleFluid = () => (
    <Card.Group>
      <Card fluid color='red' header='Option 1' />
      <Card fluid color='orange' header='Option 2' />
      <Card fluid color='yellow' header='Option 3' />
    </Card.Group>
)

const QuestCard = () => {
        return (
            <div className="qCard">
                    <CardExampleFluid />
            </div>
        );
}; 

export default QuestCard;