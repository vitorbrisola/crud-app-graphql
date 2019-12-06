import React, {Component} from 'react';
import QuestCard from './components/questCard'


const questions = [
    {
        id: 1,
        description:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    },{
        id: 2,
        description:
        'Bring to the table win-win survival strategies to ensure proactive domination.',
    },{
        id: 3,
        description:
        'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    },{
        id: 4,
        description:
        'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    }
]

export default class HomePage extends Component {



    render(){
        return (
            <div>
                <QuestCard data={questions}/>
            </div>
        );
    } 
}; 