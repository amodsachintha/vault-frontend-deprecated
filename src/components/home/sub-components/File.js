import React, {Component} from 'react';
import {Card, Button, Icon, Popup} from "semantic-ui-react";

class File extends Component {

    render() {
        const {data} = this.props;
        return (
            <Card>
                <Card.Content align='center'>
                    <Popup trigger={
                        <Card.Header>
                            {data.filename.length >= 12 ? data.filename.substr(0,12)+'..' : data.filename}
                        </Card.Header>
                    } content={data.filename} size='mini'/>
                    <Card.Meta><small>{data.created_at.toDateString()}</small></Card.Meta>
                    <Button.Group icon size='mini'>
                        <Button><Icon name='download'/></Button>
                        <Button onClick={ () => this.props.viewHandler(data)}><Icon name='eye'/></Button>
                        <Button color='red'><Icon name='delete'/></Button>
                    </Button.Group>
                </Card.Content>
            </Card>
        );
    }
}

export default File;