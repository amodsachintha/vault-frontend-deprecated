import React, {Component} from 'react';
import {List} from "semantic-ui-react";

class Folder extends Component{


    render(){
        const {data}= this.props;

        return(
            <List.Item>
                <List.Icon name='folder outline' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>{data.foldername}</List.Header>
                    <List.Description as='small'>{data.created_at.toDateString()}</List.Description>
                </List.Content>
                <List.Icon link color='red' name='close' verticalAlign='middle' onClick={()=>this.props.handleDeleteFolder(data.hash)} />
            </List.Item>
        );
    }
}


export default Folder;