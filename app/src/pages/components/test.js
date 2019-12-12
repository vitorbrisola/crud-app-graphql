import React,{Component} from 'react';
import {Icon, Menu,Button} from 'semantic-ui-react';
import './test.css'

import Question from './question'

import QuestionsQuery from '../../relay/queries/questions';


export default class Test extends Component{

    constructor(props){
        super(props);
        this.state = {
            questions: [],
            curIndex: 0,
            renderCounter: 0
        }
    }

    componentDidMount(){
        this.loadQuestions()
    }

    loadQuestions = async () =>{
        await QuestionsQuery()
            .then(data => {
                //const array = []
                for(var item of data.questions){
                    //array.push(new Question({id:item.id,reRender:this.reRender}))

                    this.setState({
                        questions: [...this.state.questions,new Question({id:item.id,reRender:this.reRender})]})
                };

                if(data.questions.length === 0){
                    this.setState({questions:[new Question({id:null,reRender:this.reRender})]})
                }
	            
            })
            .catch(err => console.log(err.message))
    }

    changeQuestion = (e,{name}) => {
        this.setState({curIndex: Number(name)})
    }

    addQuestion = () => {
        const newQuestion = new Question({id:null,reRender:this.reRender})
        const array = [...this.state.questions]
        const index = array.length
        this.setState({questions:[...array,newQuestion],curIndex:index})
        
    }

    deleteQuestion = async () => {
        var  index = this.state.curIndex;
	    //delete from server
        this.state.questions[index].delete()
        
        // deleting question locally
        var array = [...this.state.questions]
        array.splice(index,1)
        if(index === array.length){index = index - 1}
        await this.setState({questions:[...array], curIndex: index})
        // changing current question, add new for zero questions
        if(array.length === 0){
            this.addQuestion()
        }

    }


    questionRender = (question) => {
        if(this.state.questions.length === 0){
            // question adding  layout
            return(
                <div>Loading...</div>
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
                        <Menu.Menu key={key}>
                            <Menu.Item
                                
                                name={key.toString()}
                                active={this.state.curIndex === key}
                                onClick={this.changeQuestion}
                            >
                                Questão {(key+1).toString()}
                            </Menu.Item>
                            <Button icon='trash' color='red' onClick={this.deleteQuestion}/>
                        </Menu.Menu>                        
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

    reRender = () => {
        this.setState({renderCounter: (this.state.renderCounter+1)})
    }

}


