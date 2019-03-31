import React, {Component} from 'react';
import { Segment, Progress, Divider } from "semantic-ui-react";


class FileStats extends Component {

    render() {
        let {data} = this.props;
        return (
            <Segment color='green' raised>
                <h3>{data.file_name}</h3>
                <small>Created: {new Date(data.file_created_at.toString()).toDateString()}</small>
                <Divider clearing/>
                <Progress percent={data.health} indicating progress>Health</Progress>
            </Segment>
        )
    }
}

export default FileStats;