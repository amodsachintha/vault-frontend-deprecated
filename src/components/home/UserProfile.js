import React, {Component} from 'react';
import {
    Feed,
    Card
} from 'semantic-ui-react';

class UserProfile extends Component {

    render() {
        return (
            <Card>
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            <Feed.Label image='/img/elliot.jpg'/>
                            <Feed.Content>
                                <Feed.Summary>
                                    amodsachintha
                                </Feed.Summary>
                                <Feed.Date content='@c6ef4bc'/>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Card.Content>
            </Card>
        );
    }
}

export default UserProfile;