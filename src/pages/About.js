import React from 'react';
import {Grid, Segment, Header} from 'semantic-ui-react';
import AboutCard from '../components/about/AboutCard';

export default () => (
    <Grid centered columns={1}>
        <Segment>
            <Header as="h2" textAlign="center">
                About
            </Header>
            <AboutCard/>
        </Segment>
    </Grid>
)