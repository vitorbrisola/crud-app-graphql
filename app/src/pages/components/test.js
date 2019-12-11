import React,{Component} from 'react';
import {Card,Icon, Menu,Button} from 'semantic-ui-react';
import './test.css'

import QuestionInput from './question/input'

let mockData = [
    {
        id: 0,
        description:"x + 1 = 0"
    },{
        id: 1,
        description:"x + 1 = 1"
    },{
        id: 2,
        description:"x + 1 = 2"
    }
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

    componentDidMount(){
        
    }

    handleItemClick = (e,{name}) => {
        if(!this.state.isEditing) {
            this.setState({curIndex: Number(name)})
        }
    }

    addQuestion = () => {
        if(this.state.isEditing){return false}
        var newQuestion = {
            id: 3,
            description: 'x + 1 = 4'
        }

        const index = this.state.questions.length
        this.setState({questions:[...this.state.questions,newQuestion],curIndex:index,isEditing:true})
    }

    setQuestion = (description) => {
        const newQuestion = {
            id: 3,
            description: description
        }
        const array = [...this.state.questions]
        array.pop()
        this.setState({questions:[...array,newQuestion],isEditing:false})
    }

    deleteQuestion = () => {
        const index = this.state.curIndex;
        console.log(index)
        if(index === this.state.questions.length - 1){
            this.setState({curIndex: (index-1)})
        }
        var array = [...this.state.questions]
        array.splice(index,1)
        this.setState({questions:[...array], deleteCounter:(this.state.deleteCounter+1)})
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