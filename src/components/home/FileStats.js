import React, {Component} from 'react';
import {Card} from "semantic-ui-react";


class FileStats extends Component{
    constructor(props){
        super(props);
        this.state = {
            filename: props.filename,
            created_at: props.created_at,
            file_segments: '',
            health: ''
        }
    }

    render(){
        return(
            <Card fluid>
                <Card.Content>

                </Card.Content>
            </Card>
        )
    }
}


export default FileStats;