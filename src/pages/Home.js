import React from 'react';
import {
    Grid,
    Header,
    Message
} from 'semantic-ui-react';
import UserProfile from '../components/home/UserProfile';
import FolderBrowser from '../components/home/FolderBrowser';
import FileBrowser from  '../components/home/FileBrowser';
import FileStats from "../components/home/FileStats";

class Home extends React.Component {

    render() {
        const CardMargin = {
            marginTop:15
        };

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

                <Grid.Row columns='equal'>
                    <Grid.Column>
                        <Grid.Row columns={1}>
                            <Grid.Column><UserProfile/></Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1} style={CardMargin}>
                            <Grid.Column><FolderBrowser/></Grid.Column>
                        </Grid.Row>
                    </Grid.Column>

                    <Grid.Column width={10}><FileBrowser/></Grid.Column>

                    <Grid.Column><FileStats /></Grid.Column>
                </Grid.Row>


                <Grid.Row>
                    <Grid.Column width={16}>
                        <small>copyright Vault 2019</small>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}

export default Home;
