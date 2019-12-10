import React, {Component} from 'react';
import { Card} from 'semantic-ui-react'
import './quest.css'


export default class QuestionsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            questionsList: []
        };
    }

    componentDidMount(){
        console.log(this.props.data)
        this.loadData()
    }

    loadData = () => {
        this.setState({questionsList: this.props.data })
    }


    cardsLayout = (data) => {
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
    }

    render () {
        if(this.props.getData() === 0){return <div>Nenhuma questão Encontrada!</div>}
        return (
            <Card.Group items={this.cardsLayout(this.props.getData()    )} />
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