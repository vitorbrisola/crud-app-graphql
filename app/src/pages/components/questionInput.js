import React from 'react';
import { Input } from 'semantic-ui-react';

export default () => {
    return (
            <Input 
                fluid 
                action={{
                    color: 'teal',
                    labelPosition: 'right',
                    icon: 'check',
                    content: 'Finalizar'
                  }}
                actionPosition='right'
                icon='question' 
                placeholder='Adicionar Questão...' />
    )
};