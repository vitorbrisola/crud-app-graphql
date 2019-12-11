import React,{Component} from 'react';
import { Input } from 'semantic-ui-react';

export default class QuestionInput extends Component{

    constructor(props) {
        super(props);


        const question = this.props.value?this.props.value:''
        const placeholder = this.props.placeholder? this.props.placeholder:'Adicionar Questão...'

        this.state = {
            question: question,
            placeholder: placeholder
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
                    placeholder={this.state.placeholder} 
                />
        )
    }
};