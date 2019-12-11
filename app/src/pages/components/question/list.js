import React,{Component} from 'react';

import './quest.css'

import QuestionCard from './card';
import QuestionInput from './input'

import QuestionsQuery from '../../../relay/queries/questions';


export default class QuestionList extends Component{

    constructor(props){
        super(props)
        this.state = {
            questions: () => ([])
        }
    }

    componentDidMount(){
        this.setState({
            questions: []
        })
        this.loadFromServer()
    }

    loadFromServer = async () =>{
        await QuestionsQuery()
            .then(data => {
                this.setState({questions: data.questions});
            })
            .catch(err => console.log(err.message))
    }

    addQuestion = async (newDescription) => {
        console.log(newDescription)
        const newQuestion = {id:null,description:newDescription}
        this.setState({questions: [...this.state.questions,newQuestion]})
    }

    deleteQuestion = async (index) => {      
        // deleting locally
        console.log(index)
        const array = [...this.state.questions]
        array.splice(index, 1);
        this.setState({questions: array});
    }


    listRender = () => {
        if(this.state.questions.length === 0){
            return(<div>Nenhuma questão encontrada!</div>)
        }else{
            return(
                <div>
                    {this.state.questions.map((item,key) => (
                        <QuestionCard
                            key={key} 
                            index={key}
                            data={item}
                            onDelete={this.deleteQuestion} />
                    ))}
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.listRender()}
                <div className='qInput'>
                    <QuestionInput click={this.addQuestion}/>    
                </div>
            </div>
        )
    }

}