import React,{Component} from 'react';
import { Input } from 'semantic-ui-react';

export default class QuestionInput extends Component{

    constructor(props) {
        super(props);

        this.state = {
            question: ''
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