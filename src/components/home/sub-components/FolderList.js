import React, {Component} from 'react';
import {List} from "semantic-ui-react";
import FolderListItem from './FolderListItem';

class FolderList extends Component {

    folderDetails = [
        {
            folder_name: 'Documents',
            created_at: new Date("2019/03/25")
        },
        {
            folder_name: 'Images',
            created_at: new Date("2019/02/10")
        },
        {
            folder_name: 'New Folder',
            created_at: new Date("2019/02/02")
        },
    ];

    render() {
        return (
            <List divided relaxed>
                {
                    this.folderDetails.map((item,i)=>{
                        return <FolderListItem data={item}/>
                    })
                }
            </List>
        );
    }
}


export default FolderList;