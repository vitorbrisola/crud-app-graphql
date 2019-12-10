import React,{Component} from 'react';
import QuestionCard from './card';


export default class QuestionList extends Component{

    constructor(props){
        super(props)
        this.state = {
            questions: () => ([])
        }
    }

    componentDidMount(){
        this.setState({
            questions: this.props.data
        })
    }

    deleteQuestion = (id) => {
        this.props.onDelete(id)
    }

    render(){
        return(
            <div>
                {this.state.questions().map((item,key) => (
                    <QuestionCard 
                        data={{id:key,description:item.description,answers:item.answers}}
                        onDelete={this.deleteQuestion} />
                ))}
            </div>
        )
    }

}