import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import PlusButton from './sub-components/PlusButton';

class FolderBrowser extends Component {

    render() {
        return (
            <Card>
                <Card.Content>
                    <p>Directories <PlusButton/></p>
                </Card.Content>
            </Card>
        );
    }
}

export default FolderBrowser;