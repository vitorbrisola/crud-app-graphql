import React,{Component} from 'react';
import { Input,Button } from 'semantic-ui-react';

export default class AnswerInput extends Component{

    constructor(props) {
        super(props);


        const answer = this.props.value?this.props.value:''
        const placeholder = 'Adicionar Resposta...'

        this.state = {
            answer: answer,
            isCorrect: false,
            placeholder: placeholder
        }
    };


    handleClick = async () => {
        this.props.onClick(this.state.answer,this.state.isCorrect);
    }

    changeCorrectness = async () => {
        await this.setState({isCorrect: !this.state.isCorrect})
    }

    handleChange = (e) => {
        //this.props.change(e);
        this.setState({answer: e.target.value});
    }

    render(){
        return (
                <Input 
                    fluid 
                    value={this.state.answer}
                    action={
                        <div>
                            <Button 
                                circular
                                color={this.state.isCorrect?'green':'red'} 
                                icon={this.state.isCorrect?'check':'close'} 
                                onClick={() => this.changeCorrectness()}/>
                            <Button color='teal' icon='plus' onClick={() => this.handleClick()}/>
                        </div>
                    }
                    onChange={this.handleChange}
                    placeholder={this.state.placeholder} 
                />
        )
    }
};