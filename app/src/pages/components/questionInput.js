import React from 'react';
import { Input } from 'semantic-ui-react';

export default (handleChange,handleClick) => {
    return (
            <Input 
                fluid 
                action={{
                    color: 'teal',
                    icon: 'check',
                    onClick: () => handleClick(),
                }}
                onChange={handleChange}
                placeholder='Adicionar Questão...' 
            />
    )
};