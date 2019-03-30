import React from 'react';
import {
    Grid,
    Header,
    Message
} from 'semantic-ui-react';
import UserProfile from '../components/UserProfile';
import FolderBrowser from '../components/FolderBrowser';

class Home extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row columns={4}>
                    <Grid.Column floated='left'>
                        <Header as='h1'>Vault</Header>
                    </Grid.Column>

                    <Grid.Column floated='right'>
                        <Message>
                            <Message.Header>Swarm Health</Message.Header>
                            <p>
                                6/7 Peers online
                            </p>
                        </Message>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Grid.Row columns={1}>
                            <Grid.Column><UserProfile/></Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column><FolderBrowser/></Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>File browser</Grid.Column>
                    <Grid.Column>File Stats</Grid.Column>
                </Grid.Row>


                <Grid.Row>
                    <Grid.Column width={12}>
                        <small>copyright Vault 2019</small>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}

export default Home;
