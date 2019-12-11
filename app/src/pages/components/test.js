import React,{Component} from 'react';
import {Card,Icon, Menu,Button} from 'semantic-ui-react';
import './test.css'

import QuestionInput from './question/input'
import Question from './question'
import { async } from 'q';

let mockData = [
    new Question(0,'x + 0 = 0'),
    new Question(1,'x + 1 = 0'),
    new Question(2,'x + 2 = 0'),
    new Question(3,'x + 3 = 0'),
]



export default class Test extends Component{

    constructor(props){
        super(props);
        this.state = {
            questions: [...mockData],
            curIndex: 0,
            isEditing: false,
            deleteCounter: 0
        }
    }


    handleItemClick = (e,{name}) => {
        if(!this.state.isEditing) {
            this.setState({curIndex: Number(name)})
        }
    }

    addQuestion = () => {
        if(this.state.isEditing){return false}
        this.setState({isEditing:true})
        var newQuestion = null
        const index = this.state.questions.length
        this.setState({questions:[...this.state.questions,newQuestion],curIndex:index})
    }

    setQuestion = async (description) => {
        const newQuestion = new Question(3,description)
        const array = [...this.state.questions]
        if(array.length > 0){
            array.pop()
            await this.setState({questions:[...array,newQuestion]})
        }else{
            await this.setState({questions:[newQuestion],curIndex:0})
        }
        this.setState({isEditing:false})
    }

    deleteQuestion = async () => {
        const index = this.state.curIndex;
        console.log(index)


        var array = [...this.state.questions]
        array.splice(index,1)

        if(array.length === 0){
            this.addQuestion()
        }else if(index === array.length){
            await this.setState({curIndex: (index-1)})
        }
        await this.setState({questions:[...array], deleteCounter:(this.state.deleteCounter+1)})

        

    }


    questionRender = (question) => {
        if(this.state.isEditing){
            return(
                <QuestionInput onClick={this.setQuestion}/>
            )
        }else{
            return(
                <div>
                    <div className='editButtons'>
                        <Button icon='trash' color='red' onClick={this.deleteQuestion}/>
                    </div>
                    <Card
                        fluid
                        header={'Questão '+(this.state.curIndex+1).toString()}
                        description={question.description}
                    />
                </div>
            )
        }
    }

    render() {
        const activeItem = 'active'
        return (
            <div >
                <div className='testPage' >
                    {this.questionRender(this.state.questions[this.state.curIndex])}
                </div>
                <Menu attached='bottom' tabular>
                    {this.state.questions.map((item,key)=>(
                        <Menu.Item
                            key={key}
                            name={key.toString()}
                            active={this.state.curIndex === key}
                            onClick={this.handleItemClick}
                        >
                            Questão {(key+1).toString()}
                        </Menu.Item>                        
                    ))}

                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='new-tab'
                            active={activeItem === 'new-tab'}
                            onClick={this.addQuestion}
                        >
                        <Icon name='add' />
                            Nova Questão
                        </Menu.Item>
                  </Menu.Menu>
                </Menu>
            </div>
        )
    }

}