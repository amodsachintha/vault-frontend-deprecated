import React from 'react';
import {Button, Icon} from 'semantic-ui-react';

class PlusButton extends React.Component {

    render() {
        return (
            <Button animated='vertical' size='mini' positive>
                <Button.Content hidden>+</Button.Content>
                <Button.Content visible>
                    <Icon name='shop'/>
                </Button.Content>
            </Button>
        );
    }
}

export default PlusButton;