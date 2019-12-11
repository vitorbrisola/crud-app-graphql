import React,{Component} from 'react';
import { Input } from 'semantic-ui-react';

export default class QuestionInput extends Component{

    constructor(props) {
        super(props);

        if(this.props.value){var question=this.props.value}
        else{var question = ''}

        this.state = {
            question: question
        }
    };


    handleClick = async () => {
        this.props.onClick(this.state.question);
    }

    handleChange = (e) => {
        //this.props.change(e);
        this.setState({question: e.target.value});
    }

    render(){
        return (
                <Input 
                    fluid 
                    value={this.state.question}
                    action={{
                        color: 'teal',
                        icon: 'check',
                        onClick: () => this.handleClick(),
                    }}
                    onChange={this.handleChange}
                    placeholder='Adicionar Questão...' 
                />
        )
    }
};