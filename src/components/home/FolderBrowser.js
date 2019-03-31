import React, {Component} from 'react';
import {Card, Grid, Label} from 'semantic-ui-react';
import FolderList from './sub-components/FolderList'
import NewFolderModal from './sub-components/NewFolderModal';

class FolderBrowser extends Component {

    render() {
        return (
            <Card fluid raised>
                <Card.Content>
                    <Label attached='top'>Directories</Label>
                    <Grid>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <FolderList/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
                <Card.Content extra>
                    <NewFolderModal />
                </Card.Content>
            </Card>
        );
    }
}

export default FolderBrowser;