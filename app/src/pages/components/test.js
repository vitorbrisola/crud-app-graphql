import React,{Component} from 'react';
import {Card,Icon, Menu,Button} from 'semantic-ui-react';
import './test.css'

import QuestionInput from './question/input'
import Question from './question'

import QuestionsQuery from '../../relay/queries/questions';

let mockData = [
    new Question(0,'x + 0 = 0'),
    new Question(1,'x + 1 = 0'),
]

export default class Test extends Component{

    constructor(props){
        super(props);
        this.state = {
            questions: [],
            curIndex: 0,
            isEditing: true,
            deleteCounter: 0
        }
    }

    componentDidMount(){
        this.loadQuestions()
    }

    loadQuestions = async () =>{
        await QuestionsQuery()
            .then(data => {
               for(var item of data.questions){
                   this.setState({questions: [...this.state.questions,new Question(item.id)]})
               };
	       if(data.questions){this.setState({isEditing:false})}
            })
            .catch(err => console.log(err.message))
    }

    changeQuestion = (e,{name}) => {
        if(!this.state.isEditing) {
            this.setState({curIndex: Number(name)})
        }
    }

    setEmptyQuestion = () => {
        // do noting when in edit mode
        if(this.state.isEditing){return false}
        this.setState({isEditing:true})
        var newQuestion = null
        const index = this.state.questions.length
        this.setState({questions:[...this.state.questions,newQuestion],curIndex:index})
    }

    addQuestion = async (description) => {
        const newQuestion = new Question(null,description)
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
	//delete from server
	this.state.questions[index].delete()
        // deleting question locally
        var array = [...this.state.questions]
        array.splice(index,1)

        // changing current question, add new for zero questions
        if(array.length === 0){
            this.setEmptyQuestion()
        }else if(index === array.length){
            await this.setState({curIndex: (index-1)})
        }

        // deleting question locally
        await this.setState({questions:[...array], deleteCounter:(this.state.deleteCounter+1)})
    }

    updateQuestion = async () => {
	const index = this.state.curIndex;
	console.log(index)
    }

    questionRender = (question) => {
        if(this.state.isEditing){
            // question adding  layout
            return(
                <QuestionInput onClick={this.addQuestion}/>
            )
        }else{
            // question visualization layout
            return(
                <div>
                    <div className='editButtons'>
			<Button icon='pencil' color='blue' onClick={this.updateQuestion}/>
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
                            onClick={this.changeQuestion}
                        >
                            Questão {(key+1).toString()}
                        </Menu.Item>                        
                    ))}

                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='new-tab'
                            active={activeItem === 'new-tab'}
                            onClick={this.setEmptyQuestion}
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
