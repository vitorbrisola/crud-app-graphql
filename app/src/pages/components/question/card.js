import React,{Component} from 'react';
import {Card, Button} from 'semantic-ui-react'


export default class QuestionCard extends Component{

    constructor(props){
        super(props)
        this.state ={
            id: null,
            description: '',
            answers: []
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.data.id,
            description: this.props.data.description,
            answers: this.props.data.answers,
        })
    }

    delete = () => {
        this.props.onDelete(this.state.id)
    }

    render(){
        return (
            <Card
                fluid
                header={'Questão '+(this.state.id+1).toString()}
                description={this.state.description}
                extra={<Button icon='trash' color='red' onClick={this.delete} />}
            />
        )
    }

}