import React,{Component} from 'react';
import { Input } from 'semantic-ui-react';
import addQuestion from '../../relay/mutations/addQuestion'

export default class QuestionInput extends Component{

    constructor(props) {
        super(props);

        this.state = {
            question: ''
        }
    };

    handleClick = async () => {
        //this.props.click();
        //console.log(this.state.question)
        await addQuestion(this.state.question)
            .then( res => console.log('Hoi: ' + res))
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