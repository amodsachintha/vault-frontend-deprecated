import React, {Component} from 'react';
import {Card, Grid} from 'semantic-ui-react';
import PlusButton from './sub-components/PlusButton';
import FolderList from './sub-components/FolderList'

class FolderBrowser extends Component {

    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column float='left'>Directories</Grid.Column>
                            <Grid.Column float='right' align='right'><PlusButton/></Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <FolderList/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        );
    }
}

export default FolderBrowser;