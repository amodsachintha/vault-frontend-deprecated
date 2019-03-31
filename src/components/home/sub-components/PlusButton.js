import React from 'react';
import {Button, Icon} from 'semantic-ui-react';

class PlusButton extends React.Component {

    render() {
        return (
            <Button animated='vertical' size='mini' fluid>
                <Button.Content hidden><Icon name='add'/></Button.Content>
                <Button.Content visible>
                    <Icon name='add'/>
                </Button.Content>
            </Button>
        );
    }
}

export default PlusButton;