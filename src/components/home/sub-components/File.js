import React, {Component} from 'react';
import {Card, Button, Icon} from "semantic-ui-react";

class File extends Component {

    render() {
        const {data} = this.props;
        return (
            <Card>
                <Card.Content align='center'>
                    <Card.Header>{data.filename}</Card.Header>
                    <Card.Meta><small>{data.created_at.toDateString()}</small></Card.Meta>
                    <Button.Group icon size='mini'>
                        <Button><Icon name='download'/></Button>
                        <Button><Icon name='eye'/></Button>
                        <Button color='red'><Icon name='delete'/></Button>
                    </Button.Group>
                </Card.Content>
            </Card>
        );
    }
}

export default File;