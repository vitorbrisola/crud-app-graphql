import React,{Component} from 'react';
import {Card,Icon, Menu,Button} from 'semantic-ui-react';
import './test.css'

import QuestionInput from './question/input'
import Question from './question'

import QuestionsQuery from '../../relay/queries/questions';


export default class Test extends Component{

    constructor(props){
        super(props);
        this.state = {
            questions: [],
            curIndex: 0,
            questDisplayMode: 'add',
            deleteCounter: 0,
            renderCounter: 0
        }
    }

    componentDidMount(){
        this.loadQuestions()
    }

    loadQuestions = async () =>{
        await QuestionsQuery()
            .then(data => {
                for(var item of data.questions){
                    console.log(item.description)
                    this.setState({
                        questions: [...this.state.questions,new Question({id:item.id,reRender:this.reRender})]})
                };
	            if(data.questions){this.setState({questDisplayMode:'test'})}
            })
            .catch(err => console.log(err.message))
    }

    changeQuestion = (e,{name}) => {
        if(this.state.questDisplayMode === 'test')  {
            this.setState({curIndex: Number(name)})
        }
    }

    setEmptyQuestion = () => {
        // do noting when in edit mode
        if(this.state.questDisplayMode !== 'normal'){return false}
        this.setState({questDisplayMode:'add'})
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
        this.setState({questDisplayMode:'normal'})
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

    editQuestion = () => {
        this.setState({questDisplayMode:'edit'})
    }

    updateQuestion = async (newDescription) => {
	    const index = this.state.curIndex;
        this.state.questions[index].update(newDescription);
        this.setState({questDisplayMode:'normal'})
    }


    newAnswer = () => {
        const index = this.state.curIndex;
        this.state.questions[index].setNewEmptyAnswer();
        this.reRender()
    }

    questionRender = (question) => {
        if(this.state.questDisplayMode === 'add'){
            // question adding  layout
            return(
                <QuestionInput onClick={this.addQuestion}/>
            )
        }else if(this.state.questDisplayMode === 'edit'){
            // question adding  layout
            return(
                <QuestionInput 
                    value={this.state.questions[this.state.curIndex].description} 
                    onClick={this.updateQuestion}/>
            )
        }else if(this.state.questDisplayMode === 'normal'){
            // question visualization layout
            return(
                <div>
                    <div className='editButtons'>
			            <Button icon='pencil' color='blue' onClick={this.editQuestion}/>
                        <Button icon='trash' color='red' onClick={this.deleteQuestion}/>
                    </div>
                    <Card
                        fluid
                        header={'Questão '+(this.state.curIndex+1).toString()}
                        description={question.description}
                    />
                    <div>
                        {this.state.questions[this.state.curIndex].answers.map((item,key) => {
                            return (
                                <div key={key} className='answers'>
                                    {item.render(key,this.newAnswer)}
                                </div>)
                        })}
                    </div>
                </div>
            )
        }else{
            return(this.state.questions[this.state.curIndex].render(this.state.curIndex))
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

    reRender = () => {
        this.setState({renderCounter: (this.state.renderCounter+1)})
    }

}


