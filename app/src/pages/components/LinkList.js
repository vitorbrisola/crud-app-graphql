import React, { Component } from 'react';
import Link from './Link';


const linksToRender = [{
    id: '1',
    description: 'The coolest GraphQL backend',
    url: 'https://www.graph.cool'
},{
    id: '2',
    description: 'Highly performant GraphQL client from Facebook',
    url: 'https://facebook.github.io/relay/'
}]

export default class LinkList extends Component {

    render() {
        return (
            <div>
                {linksToRender.map(link => (
                    <Link key={link.id} link={link} />
                ))}
            </div>
        );
    }

}

