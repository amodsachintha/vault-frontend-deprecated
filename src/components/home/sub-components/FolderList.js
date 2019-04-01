import React, {Component} from 'react';
import {List,Transition} from "semantic-ui-react";
import Folder from './Folder';

class FolderList extends Component {
    
    render() {
        return (
            <List divided relaxed>
                {
                    this.props.folders.map((item,i)=>{
                        return <Folder data={item} key={i} handleDeleteFolder={this.props.handleDeleteFolder}/>
                    })
                }
            </List>
        );
    }
}


export default FolderList;